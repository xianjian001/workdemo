import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/discover/index.vue'),
    name: 'discover',
    path: '/discover',
    meta: {
      keepAlive: true 
      }
  },
  {
    component: () => import('@/views/discover/wedding/index.vue'),
    name: 'wedding',
    path: '/discover/wedding',
    meta: {
      keepAlive: true 
      }
  },
  {
    component: () => import('@/views/discover/wedding/commodityDetails/index.vue'),
    name: 'commodityDetails',
    path: '/discover/wedding/commodityDetails',
    meta: {
      keepAlive: true 
      }
  },
  {
    component: () => import('@/views/discover/wedding/shoppingCar/index.vue'),
    name: 'shoppingCar',
    path: '/discover/wedding/shoppingCar',
    meta: {
      keepAlive: true 
      }
  },
  {
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    path: '/home',
    meta: {
      keepAlive: true
      }
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
