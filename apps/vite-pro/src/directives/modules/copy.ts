// directives/copy.ts
import type { Directive, DirectiveBinding } from "vue";
import { ElMessage } from "element-plus";

interface ElType extends HTMLElement {
  copyData: string | number;
  __handleClick__: any;
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
    el.__handleClick__ = async () => {
      if (!el.copyData) {
        ElMessage.warning("没有需要复制的内容");
        return;
      }

      try {
        await navigator.clipboard.writeText(el.copyData.toString());
        ElMessage.success("复制成功");
      } catch (err) {
        console.error("复制失败:", err);
        ElMessage.error("复制失败");
      }
    };
    el.addEventListener("click", el.__handleClick__);
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener("click", el.__handleClick__);
  }
};

export default copy;
