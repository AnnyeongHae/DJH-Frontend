<template>
  <div class="tab-bar">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      :class="['tab', { active: currentTab === tab.key }]"
      @click="$emit('changeTab', tab.key)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentTab: String,
});

const tabs = [
  { key: 'recommend', label: '추천' },
  { key: 'news', label: '뉴스' },
  { key: 'community', label: '커뮤니티' },
  { key: 'profile', label: '프로필' },
];
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ddd;
  padding: 10px 0;
  background-color: #f0f0ff;
  width: 100%;
}

.tab {
  border: none;
  background: none;
  font-size: 14px;
  color: #444;
}

.tab.active {
  font-weight: bold;
  color: #ff9900;
}
</style>
