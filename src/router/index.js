import { createRouter, createWebHistory } from 'vue-router';

import addrRoutes from './addrRoutes';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },

  ...addrRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
