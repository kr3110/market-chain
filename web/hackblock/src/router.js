import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Map from './views/Map.vue';
import Buy from './views/Buy.vue';
import Sell from './views/Sell.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "home"
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy,
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell,
    },
  ],
});
