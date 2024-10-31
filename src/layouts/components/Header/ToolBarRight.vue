<template>
  <div class="tool-bar-ri">
    <div class="header-icon"></div>
    <span class="username">{{ username }}</span>
    <Avatar />
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/modules/user";
import Avatar from "./components/Avatar.vue";

const userStore = useUserStore();
const username = computed(() => userStore.userInfo.name);
</script>
<style lang="scss" scoped>
.tool-bar-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  .header-icon {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 21px;
      color: var(--el-header-text-color);
    }
  }
  .username {
    margin: 0 20px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>
