<template>
<div id="app">
  <login></login>
   <navbar></navbar>
  <!-- <router-view></router-view> -->
</div>
</template>

<script>
import Navbar from './components/Navbar';
import Login from './components/Login';

export default {
  name: 'app',
  components: {
    Navbar,
    Login
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
