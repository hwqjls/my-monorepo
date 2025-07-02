<template>
  <el-form-item v-bind="$attrs" :prop="attrs.prop || attrs.field">
    <el-select v-model="formData[$attrs.field as any]" v-bind="$attrs" :placeholder="attrs.placeholder || '输入后选择'">
      <template v-for="item in props.options[$attrs.field as string]" :key="item">
        <el-option :label="item.label" :value="item.value" />
      </template>
    </el-select>
  </el-form-item>
</template>
<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  form: {
    type: Object,
    default: () => ({})
  },
  options: {
    type: Object,
    default: () => ({})
  }
});

const attrs: any = useAttrs();
const formData = computed(() => props.form);
</script>
<style lang="less" scoped></style>
