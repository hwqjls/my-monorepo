<template>
  <el-form ref="cardFormRef" :model="cardForm" label-width="100px" :rules="rules">
    <card-wrapper :card-arr="card1">
      <template #base1>
        <el-row>
          <el-col :lg="6" :md="12">
            <Input :form="cardForm" label="活动名称" field="name" placeholder="活动名称" clearable />
          </el-col>
          <el-col :lg="6" :md="12">
            <Input :form="cardForm" label="活动电话" field="phone" placeholder="活动电话" clearable />
          </el-col>
          <el-col :lg="6" :md="12">
            <Select :form="cardForm" :options="options" label="活动地点" field="region" filterable />
          </el-col>
          <el-col :lg="6" :md="12">
            <Select :form="cardForm" :options="options" label="状态" field="status" filterable />
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="6" :md="12">
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    v-model="cardForm.date1"
                    type="date"
                    aria-label="Pick a date"
                    placeholder="日期"
                    style="width: 100%"
                  />
                </el-form-item>
              </el-col>
              <el-col class="text-center" :span="1" :offset="1">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker v-model="cardForm.date2" aria-label="Pick a time" placeholder="时间" style="width: 100%" />
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12">
            <el-form-item label="及时交付" prop="delivery">
              <el-switch v-model="cardForm.delivery" />
            </el-form-item>
          </el-col>
        </el-row>
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
      <template #footer>
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm(cardFormRef)"> Create </el-button>
          <el-button @click="resetForm(cardFormRef)"> Reset </el-button>
        </el-form-item>
      </template>
    </card-wrapper>
  </el-form>
</template>
<script lang="ts" setup>
import { FormInstance } from "element-plus";
import { card1, card2, cardForm, rules, options } from "./config";
const cardFormRef = ref<FormInstance>();

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success("提交的数据为 : " + JSON.stringify(cardForm));
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="scss" scoped>
.el-form {
  width: 100%;
}
</style>
