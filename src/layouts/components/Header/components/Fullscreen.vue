<template>
  <div class="fullscreen">
    <i :class="['iconfont', 'toolBar-icon', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" @click="handleFullScreen"></i>
  </div>
</template>
<script lang="ts" setup>
import screenfull from "screenfull";

const isFullscreen = ref(screenfull.isFullscreen);

onMounted(() => {
  screenfull.on("change", () => {
    if (screenfull.isFullscreen) isFullscreen.value = true;
    else isFullscreen.value = false;
  });
});

const handleFullScreen = () => {
  if (!screenfull.isEnabled) ElMessage.warning("当前您的浏览器不支持全屏 ❌");
  screenfull.toggle();
};
</script>
