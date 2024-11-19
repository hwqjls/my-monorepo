<template>
  <el-form-item v-bind="$attrs" :prop="attrs.prop || attrs.field">
    <el-input v-model="formData[$attrs.field as any]" v-bind="$attrs" />
  </el-form-item>
</template>
<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  form: {
    type: Object,
    default: () => ({})
  }
});

const attrs: any = useAttrs();
const formData = computed(() => props.form);
</script>
<style lang="less" scoped></style>
