<template>
<div id="app">
  <navbar></navbar>
  <foods></foods>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Foods from './components/Foods'

export default {
  name: 'app',
  components: {
    Navbar,
    Foods
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<!-- Paper Kit Stylesheet by Creative Tom -->
<style lang="scss">
@import './assets/sass/ct-paper.scss'
</style>
