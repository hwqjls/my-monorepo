<template>
  <card-wrapper :card-arr="card1">
    <template #base1>
      <div>基础信息1内容</div>
    </template>
    <template #base2>
      <div>基础信息2内容</div>
    </template>
    <template #base3>
      <div>基础信息3内容</div>
    </template>
  </card-wrapper>

  <card-wrapper :card-arr="card2">
    <template #info1>
      <div>详细信息1内容</div>
    </template>
    <template #info2>
      <div>详细信息2内容</div>
    </template>
    <template #info3>
      <div>详细信息3内容</div>
    </template>
  </card-wrapper>

  <card-wrapper :card-arr="card" :card-margin="'12px'" has-top-radius has-bottom-radius>
    <template #card>
      <div>圆角卡片内容</div>
    </template>
  </card-wrapper>
</template>
<script lang="ts" setup>
import type { ContentInterface } from "@/components/CardWrapper/interface";

const card1 = reactive<ContentInterface[]>([
  { title: "基础信息1", slotName: "base1" },
  { title: "基础信息2", slotName: "base2" },
  { title: "基础信息3", slotName: "base3" }
]);

const card2 = reactive<ContentInterface[]>([
  { title: "详细信息1", slotName: "info1", titleBgColor: "#000" },
  { title: "详细信息2", slotName: "info2", titleBgColor: "#aabbcc" },
  { title: "详细信息3", slotName: "info3", titleBgColor: "#ededed" }
]);

const card = reactive<ContentInterface[]>([{ title: "圆角卡片", slotName: "card" }]);
</script>
<style lang="scss" scoped></style>
