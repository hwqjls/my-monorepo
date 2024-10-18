import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/components/Loading/fullScreen";
import { ResultEnum } from "@/enum/httpEnum";
import { AxiosCanceler } from "./helper/axiosCancel";
import { useUserStore } from "@/stores/modules/user";
import { ResultData } from "./interface";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean;
  cancel?: boolean;
}

const config = {
  // 默认地址请求地址，可在 .env.** 文件中修改
  // baseURL: import.meta.env.VITE_API_URL as string,
  baseURL: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e',
  // 设置超时时间
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true
}

const axiosCanceler = new AxiosCanceler();

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的 token,存储到 vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        const userStore = useUserStore();
        // 重复请求不需要取消，在 api 服务中通过指定的第三个参数: { cancel: false } 来控制
        config.cancel ??= true;
        config.cancel && axiosCanceler.addPending(config);
        // 当前请求不需要显示 loading，在 api 服务中通过指定的第三个参数: { loading: false } 来控制
        config.loading ??= true;
        config.loading && showFullScreenLoading();
        if (config.headers && typeof config.headers.set === "function") {
          config.headers.set("x-access-token", userStore.token);
        }

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    )

    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse & { config: CustomAxiosRequestConfig }) => {
        const { data, config } = response;
        console.log(data);
        config.loading && tryHideFullScreenLoading();
        return data
      },
      async (error: AxiosError) => {
        const { response } = error;
        tryHideFullScreenLoading();
      }
    )
  }

  /**
   * @description 常用请求方法封装
   */
  post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequestHttp(config);