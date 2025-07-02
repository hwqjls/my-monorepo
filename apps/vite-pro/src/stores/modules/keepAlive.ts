import { defineStore } from "pinia";
import { KeepAliveState } from "@/stores/interface";

export const useKeepAliveStore = defineStore({
  id: "vite-keepAlive",
  state: (): KeepAliveState => ({
    keepAliveName: []
  }),
  actions: {
    async addKeepAliveName(name: string) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
    },
    async removeKeepAliveName(name: string) {
      this.keepAliveName = this.keepAliveName.filter(item => item !== name);
    },
    async setKeepAliveName(keepAliveName: string[] = []) {
      this.keepAliveName = keepAliveName;
    }
  }
});
