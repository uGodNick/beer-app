import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import BeerView from '../views/BeerView.vue';
import UserView from '../views/UserView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/beer:isRecomended?',
    name: 'beer',
    component: BeerView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '',
    redirect: '/beer'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
