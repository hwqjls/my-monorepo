<template>
  <div class="maximize" @click="exitMaximize">
    <i class="iconfont icon-tuichu"></i>
  </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "@/stores/modules/global";

const globalStore = useGlobalStore();
const exitMaximize = () => {
  globalStore.setGlobalState("maximize", false);
};
</script>
<style lang="scss" scoped>
@use "./../index";
</style>
