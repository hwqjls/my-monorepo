import { defineStore } from "pinia";
import { UserState } from "../interface";
import piniaPersistConfig from "../helper/persist";

export const useUserStore = defineStore({
  id: "vite-user",
  state: (): UserState => ({
    token: "",
    userInfo: { name: "Vite" }
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig("vite-user")
});
