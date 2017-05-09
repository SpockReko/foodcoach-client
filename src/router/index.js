import Vue from 'vue';
import Router from 'vue-router';
import WeekForm from '@/components/WeekForm';
import WeekMenu from '@/components/WeekMenu';
import Login from '@/components/Login';
import Optrecipe from '@/components/Optrecipe';
import GenWeekMenu from '@/components/GenWeekMenu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: WeekForm
    }, {
      path: '/result',
      component: WeekMenu
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/optrecipe',
      component: Optrecipe
    }, {
      path: '/genWeekMenu',
      component: GenWeekMenu
    }
  ]
});
