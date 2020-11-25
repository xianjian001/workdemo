import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/community/index.vue'),
    name: 'community',
    path: '/community',
  },
  {
    component: () => import('@/views/discover/index.vue'),
    name: 'discover',
    path: '/discover',
  },
  {
    component: () => import('@/views/discover/photoTour/index.vue'),
    name: 'discover-photoTour',
    path: '/discover/photoTour',
  },
  {
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    path: '/home',
  },
  {
    component: () => import('@/views/our/index.vue'),
    name: 'our',
    path: '/our',
  },
  {
    path: '/',
    redirect: '/home'
  },
];
const router = new Router({
  mode: 'hash',
  routes,
});
export default router;
