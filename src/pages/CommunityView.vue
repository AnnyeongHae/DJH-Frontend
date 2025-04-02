<template>
  <div class="community-view">
    <div class="title-bar">당신의 카테고리 유형은 xxx</div>
    <div class="popular-post">인기글</div>
    <div class="latest-post">유형별 최신글</div>
    <button class="floating-btn">+</button>
  </div>
</template>

<script setup></script>

<style scoped>
.community-view {
  padding: 20px;
  background: #000;
  color: white;
  position: relative;
  height: 90%;
}

.title-bar,
.popular-post,
.latest-post {
  background: #111;
  margin-bottom: 10px;
  padding: 10px;
}

.floating-btn {
  position: absolute;
  right: 20px;
  bottom: 60px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
}
</style>
