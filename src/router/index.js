import Vue from 'vue';
import Router from 'vue-router';
import SockMerchant from '@/components/SockMerchant';
import CountingValleys from '@/components/CountingValleys';
import JumpingOnTheClouds from '@/components/JumpingOnTheClouds';
import Holoalphabetic from '@/components/Holoalphabetic';
import Strings from '@/components/Strings';
import MinimalOperations from '@/components/MinimalOperations';
import Home from '@/components/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hackerrank/sockmerchant',
      name: 'SockMerchant',
      component: SockMerchant
    },
    {
      path: '/hackerrank/countingvalleys',
      name: 'CountingValleys',
      component: CountingValleys
    },
    {
      path: '/hackerrank/jumpingontheclouds',
      name: 'JumpingOnTheClouds',
      component: JumpingOnTheClouds
    },
    {
      path: '/hackerrank/holoalphabetic',
      name: 'Holoalphabetic',
      component: Holoalphabetic
    },
    {
      path: '/hackerrank/strings',
      name: 'Strings',
      component: Strings
    },
    {
      path: '/hackerrank/minimaloperations',
      name: 'MinimalOperations',
      component: MinimalOperations
    }
  ]
});
export default router;
