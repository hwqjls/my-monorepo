import type { FormRules } from "element-plus";
import type { ContentInterface } from "@/components/CardWrapper/interface";
import { checkPhoneNumber } from "@/hooks/eleValidate";
import selectApi from "@/api/modules/selectApi";
import { forEach } from "lodash-es";

const card1 = reactive<ContentInterface[]>([
  { title: "基础信息1", slotName: "base1" },
  { title: "基础信息2", slotName: "base2" },
  { title: "基础信息3", slotName: "base3" }
]);

const card2 = reactive<ContentInterface[]>([
  { title: "详细信息1", slotName: "info1", titleBgColor: "#000" },
  { title: "详细信息2", slotName: "info2", titleBgColor: "#aabbcc" },
  { title: "详细信息3", slotName: "footer", titleBgColor: "#ededed", isCenter: true }
]);

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
  status: [requiredRule],
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

const cardForm = reactive<Record<string, any>>({
  name: "Vite-Admin",
  phone: "",
  region: "",
  delivery: false,
  date1: "",
  date2: "",
  status: null,
  resource: "",
  desc: ""
});

// 表单下拉值
const options = reactive<Record<string, any>>({
  region: [
    { label: "Zone one", value: "shanghai" },
    { label: "Zone two", value: "beijing" }
  ],
  status: []
});

// 通用获取后端返回表单下拉值
function getFormSelect() {
  const formSelect = reactive<Record<string, string>>({
    status: "StatusSelect"
  });

  forEach(formSelect, (apiName: string, key: string) => {
    const res = selectApi[apiName as keyof typeof selectApi]();
    options[key] = res;
  });
}
getFormSelect();

export { card1, card2, cardForm, rules, options };
