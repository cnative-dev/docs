<template>
  <div :key="route.path" ref="container" />
</template>
<script setup lang="ts">
import { useRoute } from 'vitepress';
import { onMounted, ref } from 'vue';

const container = ref()
const route = useRoute()
const pv = () => {
  const s = document.createElement('script')
  s.id = '_baidu_js'
  s.src = "https://hm.baidu.com/hm.js?96399941a9f19d067d8153c01cf2ab92";
  s.async = true
  container.value.appendChild(s)
}
onMounted(pv) //first load
</script>