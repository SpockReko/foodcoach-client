<template>
<div class="container">
  <div class="row">
    <h3>Generera en meny</h3>
    <div class="col-md-6">
      <p> Användarnamn </p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="getUser">
    </div>
    <div class="col-md-6">
      <p> Antal recept </p>
      <input type="text" class="form-control" placeholder="" v-model="getNumber">
      <button class="btn btn-fill btn-success btn-lg pull-right" v-on:click="receptOpti" >Genere Veckomeny</button>
    </div>
  </div>
  <div class="row" v-if="showGenMenu">
    <div class="col-md-3">
      <p id="titel">Recept</p>
      <p v-for="recipe in recipes">{{recipe.title}}</p>
    </div>
    <div class="col-md-3">
      <p id="titel">Inköpslista</p>
      <p v-for="ingredient in recipes.ingredients"> Walla {{ingredient.food.name}}</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'genWeekMenu',
  data() {
    return {
      showGenMenu: false,
      getUser: '',
      getNumber: '',
      menus: [],
      recipes: [],
      ingredients: [],
    };
  },
  methods: {
    receptOpti() {
      this.showGenMenu = true;
      this.$http.get(`http://localhost:9000/menu/nutrient/user?name=${this.getUser}&nrOfRecipes=${this.getNumber}`)
        .then((response) => {
          console.log(response.body);
          this.menus = response.body;
          this.recipes = response.body.recipes;
          console.log(response.body.recipes[0].ingredients);
        });
    },
    // fetchRecipes() {
    //   this.$http.get('http://localhost:9000/recipes')
    //     .then((response) => {
    //       this.recipes = response.body;
    //       console.log(response.body);
    //     });
    // }
  },
  // created() {
  //   this.fetchRecipes();
  // },
};

</script>

<style>

#titel {
  font-weight: bold;
}

</style>
