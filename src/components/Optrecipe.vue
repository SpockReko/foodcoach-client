<template>
<div class="container">
  <div class="row">
    <h3>Optimera recept för din användare</h3>
    <div class="col-md-6">
      <p> Recept by id </p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="getUser">
    </div>
    <div class="col-md-6">
      <p> Recept by id </p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="getNumber">
      <button v-on:click="receptOpti">Optimera</button>
    </div>
  </div>
<div class="row">
  <p v-for="recipe in recipes"> </p>
</div>
</div>
</template>

<script>
export default {
  name: 'optrecipe',
  data() {
    return {
      getUser: '',
      getNumber: '',
      recipes: [],
    };
  },
  methods: {
    receptOpti() {
      this.$http.get(`http://localhost:9000/recipe/optimize/user/${this.getNumber}?userName=${this.getUser}`)
        .then((response) => {
          console.log(response);
          this.recipes = response.body;
        });
    },
  },
};

</script>

<style>

</style>
