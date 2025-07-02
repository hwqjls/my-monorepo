<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="vue" />
          <h2 class="logo-text">Vite-Pro</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="login">
import LoginForm from "./components/LoginForm.vue";
</script>
<style lang="scss" scoped>
@use "./index";
</style>
