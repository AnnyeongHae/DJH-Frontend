<template>
  <div class="home"></div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { ref, onMounted } from 'vue';

const router = useRouter();
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
