<script setup lang="ts">
import { ref, onMounted } from 'vue';

const status = ref(false)
const toggle = () => {
  status.value = !status.value
}
</script>

<template>
  <div>
    <p>Estado: {{ status }}</p>
    <button @click="toggle">Toggle</button>
  </div>
</template>
