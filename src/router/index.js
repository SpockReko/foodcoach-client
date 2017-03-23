import Vue from 'vue';
import Router from 'vue-router';
import WeekForm from '@/components/WeekForm';
import WeekMenu from '@/components/WeekMenu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: WeekForm
    }, {
      path: '/result',
      component: WeekMenu
    }
  ]
});
