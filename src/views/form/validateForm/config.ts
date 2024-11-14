import { checkPhoneNumber } from "@/hooks/eleValidate";
import type { FormRules } from "element-plus";

const requiredRule = {
  // 表单校验
  required: true,
  message: "该项为必填项",
  trigger: ["blur", "change"]
};

const rules = reactive<FormRules>({
  name: [requiredRule, { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }],
  phone: [{ required: true, validator: checkPhoneNumber, trigger: "blur" }],
  region: [requiredRule],
  date1: [
    {
      type: "date",
      ...requiredRule
    }
  ],
  date2: [
    {
      type: "date",
      ...requiredRule
    }
  ],
  resource: [requiredRule],
  desc: [requiredRule]
});

export { rules };
