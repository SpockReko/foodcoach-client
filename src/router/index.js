import Vue from 'vue';
import Router from 'vue-router';
import Week from '@/components/Week';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Week',
      component: Week,
    },
  ],
});
