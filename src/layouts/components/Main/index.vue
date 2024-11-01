<template>
  <Maximize v-show="maximize" />
  <Tabs v-show="tabs" />
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/modules/global";
import Maximize from "./components/Maximize.vue";
import Tabs from "@/layouts/components/Tabs/index.vue";

const globalStore = useGlobalStore();
const { maximize, tabs } = storeToRefs(globalStore);

// 监听当前页面是否最大化，动态添加 class
watch(
  () => maximize.value,
  () => {
    const app = document.getElementById("app") as HTMLElement;
    if (maximize.value) app.classList.add("main-maximize");
    else app.classList.remove("main-maximize");
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped></style>
