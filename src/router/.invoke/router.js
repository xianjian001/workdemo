import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/discover/index.vue'),
    name: 'discover',
    path: '/discover',
  },
  {
    component: () => import('@/views/discover/commodityDetails/index.vue'),
    name: 'commodityDetails',
    path: '/discover/commodityDetails',
  },
  {
    component: () => import('@/views/discover/shoppingCar/index.vue'),
    name: 'shoppingCar',
    path: '/discover/shoppingCar',
  },
  {
    component: () => import('@/views/discover/wedding/index.vue'),
    name: 'wedding',
    path: '/discover/wedding',
  },
  {
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    path: '/home',
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
