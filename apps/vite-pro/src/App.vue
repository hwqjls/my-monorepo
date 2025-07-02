<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";

const { initTheme } = useTheme();
initTheme();
</script>

<style scoped></style>
