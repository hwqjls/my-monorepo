<template>
  <div class="title-wrapper">
    <div class="vertical-bar" :style="{ 'background-color': $props.bgColor }" />
    <div class="text">
      <slot>标题</slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DEFAULT_PRIMARY } from "@/config";

defineProps({
  bgColor: {
    type: String as PropType<string>,
    default: DEFAULT_PRIMARY
  }
});
</script>
<style lang="scss" scoped>
.title-wrapper {
  display: flex;
  place-content: center flex-start;
  .vertical-bar {
    width: 4px;
    height: 14px;
    margin-right: 8px;
  }
  .text {
    font-family: "PingFang SC";
    font-size: 16px;
    line-height: 14px;
    color: #000000;
  }
}
</style>
