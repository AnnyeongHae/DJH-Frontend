<template>
  <div class="profile-view">
    <h2>My Profile</h2>
    <div class="section">❤️ Favourites</div>
    <div class="section">📅 Reservations</div>
    <div class="section">🌐 Languages</div>
    <div class="section">📍 Location</div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
</script>

<style scoped>
.profile-view {
  padding: 20px;
  background: #fdfdfd;
  height: 90%;
}

.section {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
