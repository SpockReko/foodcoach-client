<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">MatCoach</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navigation-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a href="#" class="btn btn-primary btn-fill">Generate</a>
          </li>
          <li>
            <a href="#" class="btn btn-success btn-fill">Foods</a>
          </li>
          <li>
            <a href="#" class="btn btn-warning btn-fill">Recipes</a>
          </li>
          <li>
            <a href="#" class="btn btn-secondary btn-fill">About</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" class="btn btn-danger btn-fill">Logout</a>
          </li>
         </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-->
  </nav>
</template>

<script>
export default {
  name: 'fc-navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
