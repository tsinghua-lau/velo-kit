<script setup lang="ts">
import { ref } from 'vue'
import { useFormatDate } from '../../dist/index.js'

defineProps<{ msg: string }>()

const count = ref(0)
// console.log(add, 11111)

const ok = () => {
  count.value++
  console.log(useFormatDate({ dateString: '2022-01-01 12:00:02', format: 'YYYY/MM/DD HH', chinese: true }))
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <!-- {{ dateToChinese({}) }} -->
  <div class="card">
    <button type="button" @click="ok">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
