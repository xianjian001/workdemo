import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/commodityDetails/index.vue'),
    name: 'commodityDetails',
    path: '/commodityDetails',
  },
  {
    component: () => import('@/views/discover/index.vue'),
    name: 'discover',
    path: '/discover',
  },
  {
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    path: '/home',
  },
  {
    component: () => import('@/views/shoppingCar/index.vue'),
    name: 'shoppingCar',
    path: '/shoppingCar',
  },
  {
    component: () => import('@/views/wedding/index.vue'),
    name: 'wedding',
    path: '/wedding',
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
