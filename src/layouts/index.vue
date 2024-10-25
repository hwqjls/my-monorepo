<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[layout]" />
</template>
<script lang="ts" setup name="layout">
import { LayoutType } from "@/stores/interface";
import { useGlobalStore } from "@/stores/modules/global";
import LayoutVertical from "./LayoutVertical/index.vue";

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: LayoutVertical
};

const globalStore = useGlobalStore();

const layout = computed(() => globalStore.layout);
</script>
<style lang="scss" scoped>
.layout {
  min-width: 600px;
}
</style>
