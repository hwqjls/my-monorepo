<template>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  <el-tag>标签一</el-tag>
  <el-tag type="success">标签二</el-tag>
  <el-tag type="info">标签三</el-tag>
  <el-tag type="warning">标签四</el-tag>
  <el-tag type="danger">标签五</el-tag>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div @click="goAbout">to about</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps<{ msg: string }>()

const router = useRouter()

const count = ref(0)
const input = ref()

const goAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
