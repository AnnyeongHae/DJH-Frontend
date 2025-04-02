<template>
  <div class="mobile-frame">
    <div class="mobile-screen">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.mobile-frame {
  width: 360px;
  height: 720px;
  border: 16px solid #333;
  border-radius: 36px;
  background-color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mobile-screen {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
}
</style>
