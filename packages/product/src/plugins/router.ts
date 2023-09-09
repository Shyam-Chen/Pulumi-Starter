import { createWebHistory, createRouter } from 'vue-router';

import routes from 'virtual:vue-routes';

import Channel from './Channel.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,

    {
      path: '/channel',
      component: Channel,
    },

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
