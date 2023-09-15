import { createWebHistory, createRouter } from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/es/helper';

import routes from 'virtual:vue-routes';

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/order' : '/'),
  routes: [
    ...routes,

    {
      path: '/:slug(.*)*',
      component: () => import('~/Error.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});

export default router;
