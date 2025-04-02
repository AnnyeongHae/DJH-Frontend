<template>
  <div class="intro">
    <img
      src="@/assets/images/l3.png"
      class="preview-image"
    />
    <h1>본 앱을 소개합니다</h1>
    <p>여기에 간단한 설명이나 소개 문구를 작성하세요.</p>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.intro {
  padding: 40px;
  font-size: 1.25rem;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.preview-image {
  width: 300px; /* 원하는 고정 너비 */
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  margin-bottom: 20px;
}

/* 반응형에서도 일정한 이미지 유지 */
@media (max-width: 800px) {
  .preview-image {
    width: 200px;
  }
}
</style>
