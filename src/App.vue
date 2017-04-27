<template>
<div id="app">
  <login></login>
   <navbar></navbar>
   <WeekMenu></WeekMenu>
  <!-- <router-view></router-view> -->
</div>
</template>

<script>
import Navbar from './components/Navbar';
import Login from './components/Login';
import WeekMenu from './components/WeekMenu';

export default {
  name: 'app',
  components: {
    Navbar,
    Login,
    WeekMenu
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<!-- Paper Kit Stylesheet by Creative Tom -->
<style lang="scss">@import './static/sass/ct-paper.scss'</style>
