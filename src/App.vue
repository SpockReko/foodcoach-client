<template>
<div id="app">
  <navbar></navbar>
  <week></week>
</div>
</template>

<script>
import Navbar from './components/Navbar';
import Week from './components/Week';

export default {
  name: 'app',
  components: {
    Navbar,
    Week,
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
