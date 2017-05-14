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
          <span class="icon-bar"></span>
        </button>
      <a class="navbar-brand" href="#/result">MatCoach</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navigation-collapse">
      <ul class="nav navbar-nav">
        <li>
          <a href="#/GenWeekMenu" class="btn btn-fill">Veckomeny</a>
        </li>
        <li>
          <a href="#/Optrecipe" class="btn btn-fill">Optimera Recept</a>
        </li>
        <li>
          <a href="#/AddRecipe" class="btn btn-fill">Lägg till recept</a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#/login" class="btn btn-danger btn-fill" v-on:click="logoutClick(false)" v-if="logout">Logout</a>
          <a href="#/result" class="btn btn-danger btn-fill" v-on:click="logoutClick(true)" v-else="logout">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      logout: false
    };
  },
  methods: {
    logoutClick(variabel) {
      this.logout = variabel;
    }
  }

};
</script>
