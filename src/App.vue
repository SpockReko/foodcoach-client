<template>
<div id="app">
   <navbar></navbar>
   <router-view></router-view>
</div>
</template>

<script>
import Navbar from './components/Navbar';


export default {
  name: 'app',
  components: {
    Navbar
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
