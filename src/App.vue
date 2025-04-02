<script setup>
import { RouterView } from 'vue-router';
import Layout from './layouts/Layout.vue';
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #f5f5f5;
}
</style>
