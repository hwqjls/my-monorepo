import { RouteRecordRaw } from "vue-router";
import { LOGIN_URL } from "@/config";

export const staticRoueter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: LOGIN_URL
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  }
];
