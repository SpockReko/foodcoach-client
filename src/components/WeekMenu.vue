<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Här är din veckomeny</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Kcal per portion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipe in recipes">
            <td>{{recipe.title}}</td>
            <td>{{recipe.energyKcalPerPortion}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'week-menu',
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    fetchRecipes() {
      this.$http.get('http://localhost:9000/recipes')
        .then((response) => {
          this.recipes = response.body;
        });
    }
  },
  created() {
    this.fetchRecipes();
  }
};
</script>

<style scoped></style>
