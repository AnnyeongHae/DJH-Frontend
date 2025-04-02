<template>
  <div class="home-page">
    <div class="left-content">
      <AppIntro />
    </div>
    <div class="right-content">
      <div class="main-content">
        <component :is="currentView" />
      </div>
      <div class="bottom-area">
        <BottomTabBar
          :currentTab="currentTab"
          @changeTab="setCurrentTab"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppIntro from '@/components/common/AppIntro.vue';
import BottomTabBar from '@/components/common/BottomTabBar.vue';

import LoginView from '@/pages/LoginView.vue';
import RecommendView from '@/pages/RecommendView.vue';
import NewsView from '@/pages/NewsView.vue';
import CommunityView from '@/pages/CommunityView.vue';
import ProfileView from '@/pages/ProfileView.vue';

import { ref, computed } from 'vue';
const currentTab = ref('login');

const viewMap = {
  login: LoginView,
  recommend: RecommendView,
  news: NewsView,
  community: CommunityView,
  profile: ProfileView,
};

const currentView = computed(
  () => viewMap[currentTab.value]
);
const setCurrentTab = (tab) => (currentTab.value = tab);
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
}

.left-content {
  flex: 2;
}

.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 430px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 1;
  overflow-y: auto;
}

.bottom-area {
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .home-page {
    flex-direction: column;
  }

  .left-content {
    display: none;
  }

  .right-content {
    width: 100%;
    max-width: none;
  }
}
</style>
