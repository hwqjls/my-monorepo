/*
  需求：给整个页面添加背景水印。

  思路：
    1、使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
    2、将其设置为背景图片，从而实现页面或组件水印效果
  
  使用：设置水印文案，颜色，字体大小即可
  <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
*/

import type { Directive, DirectiveBinding } from "vue";

const addWaterMarker: Directive = (str: string, parentNode: any, font: any, textColor: string) => {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  parentNode.appendChild(canvas);
  canvas.width = 205;
  canvas.height = 130;
  canvas.style.display = "none";
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  if (!ctx) return;
  ctx.font = font || "16px Microsoft JhengHei";
  ctx.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle" as CanvasTextBaseline;
  ctx.rotate((-20 * Math.PI) / 180);
  ctx.fillText(str, canvas.width / 2, canvas.height / 2);
  const base64Url = canvas.toDataURL("image/png");
  parentNode.style.backgroundImage = `url(${base64Url})`;
};

const waterMarker = {
  mounted(el: DirectiveBinding, binding: DirectiveBinding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
  }
};

export default waterMarker;
