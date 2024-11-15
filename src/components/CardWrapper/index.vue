<template>
  <div
    class="card-wrapper"
    :class="[{ 'top-radius': hasTopRadius }, { 'bottom-radius': hasBottomRadius }]"
    :style="{ padding: cardPadding, margin: cardMargin }"
  >
    <template v-for="card in cardArr" :key="card.slotName">
      <Title v-if="card.title" :bg-color="card.titleBgColor">{{ card.title }}</Title>
      <div class="card-content">
        <slot :name="card.slotName" />
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ContentInterface } from "./interface";
import Title from "@/components/Title/index.vue";

defineProps({
  cardArr: {
    type: Array as PropType<ContentInterface[]>,
    default: () => []
  },
  cardPadding: {
    type: String as PropType<string>,
    default: "12px"
  },
  cardMargin: {
    type: String as PropType<string>,
    default: "0 0 16px"
  },
  hasTopRadius: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  hasBottomRadius: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});
</script>
<style lang="scss" scoped>
.card-wrapper {
  margin-bottom: 16px;
  background-color: #ffffff;
  .card-content {
    margin: 12px;
  }
}

/* 顶部圆角 */
.top-radius {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* 底部圆角 */
.bottom-radius {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
