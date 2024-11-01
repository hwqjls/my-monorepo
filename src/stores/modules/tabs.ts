import router from "@/routers";
import { defineStore } from "pinia";
import { TabsState, TabsMenuProps } from "@/stores/interface";
import { useKeepAliveStore } from "./keepAlive";
import piniaPersistConfig from "@/stores/helper/persist";

const keepAliveStore = useKeepAliveStore();

export const useTabsStore = defineStore({
  id: "vite-tabs",
  state: (): TabsState => ({
    tabsMenuList: []
  }),
  actions: {
    async addTabs(tabItem: TabsMenuProps) {
      if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem);
      }
      // add keepalive
      if (!keepAliveStore.keepAliveName.includes(tabItem.name) && tabItem.isKeepAlive) {
        keepAliveStore.addKeepAliveName(tabItem.path);
      }
    },
    async removeTabs(tabPath: string, isCurrent: boolean = true) {
      if (isCurrent) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return;
          const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1];
          if (!nextTab) return;
          router.push(nextTab.path);
        });
      }
      // remove keepalive
      const tabItem = this.tabsMenuList.find(item => item.path === tabPath);
      tabItem?.isKeepAlive && keepAliveStore.removeKeepAliveName(tabItem.path);
      // set tabs
      this.tabsMenuList = this.tabsMenuList.filter(item => item.path !== tabPath);
    },
    async setTabs(tabsMenuList: TabsMenuProps[]) {
      this.tabsMenuList = tabsMenuList;
    }
  },
  persist: piniaPersistConfig("vite-tabs")
});
