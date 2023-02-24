<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps({
  colors: {
    type: Array,
    default: () => ['red', 'yellow']
  }
})

const style = reactive({
  backgroundImage: `linear-gradient(to right, ${props.colors[0]} 0%, ${props.colors[1]} 100%)`
})
</script>

<template>
  <div>
    <div class="app" :style="style"></div>
  </div>
</template>
