<template>
<div class="container">
  <div class="row">
    <h3>Optimera recept för din användare</h3>
    <div class="col-md-6">
      <p> Användarnamn </p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="getUser">
    </div>
    <div class="col-md-6">
      <!-- <p> Välj recept </p>
      <input type="text" class="form-control" placeholder="Sök" v-model="getNumber"> -->
      <label class="control-label"> Välj recept</label>
      <select class="form-control" v-model="getRecipe">
        <option disabled>Välj</option>
        <option v-for="recipe in recipes">{{recipe.title}}</option>
      </select>


      <button class="btn btn-fill btn-success btn-lg pull-right" v-on:click="receptOpti" >Optimera</button>
    </div>
  </div>
<div class="row" v-if="showOptRecipe">
    <p id="titel" >{{optrecipes.title}} </p>
    <div class="col-md-6">
    <p id="titel" >Ingredienser</p>
    <p v-for="ingredient in ingredients"> {{ingredient.food.name}} </p>
  </div>
  <div class="col-md-6">
    <p id="titel" >Mängd</p>
    <p v-for="ingredient in ingredients"> {{Math.round(ingredient.amount.quantity)}} {{ingredient.amount.unit}}</p>
  </div>
</div>
<div class="row" v-if="showOptRecipe">
  <div class="col-sm-2">
    <p id="titel">Kcal: </p>
    <p>{{optrecipes.energyKcal}}kcal</p>
  </div>
  <div class="col-sm-2">
    <p id="titel">Protein: </p>
    <p>{{optrecipes.protein}}g</p>
  </div>
  <div class="col-sm-2">
    <p id="titel">Kolhydrater: </p>
    <p>{{optrecipes.carbohydrates}}g</p>
  </div>
  <div class="col-sm-2">
    <p id="titel">Fett: </p>
    <p>{{optrecipes.fat}}g</p>
  </div>
  <div class="col-sm-2">
    <p id="titel">Koldioxid: </p>
    <p>{{optrecipes.co2PerPortion / 100}}kg</p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'optrecipe',
  data() {
    return {
      showOptRecipe: false,
      getUser: '',
      // getNumber: '',
      getRecipe: '',
      optrecipes: [],
      ingredients: [],
      recipes: [],
      // foods [],
    };
  },
  methods: {
    receptOpti() {
      this.showOptRecipe = true;
      this.$http.get(`http://localhost:9000/recipe/optimize/user/${this.getRecipe}?userName=${this.getUser}`)
        .then((response) => {
          console.log(response);
          this.optrecipes = response.body;
          this.ingredients = response.body.ingredients;
          // this.foods = response.body.ingredients[0].food;
          console.log(response.body.ingredients);
        });
    },
    fetchRecipes() {
      this.$http.get('http://localhost:9000/recipes')
        .then((response) => {
          this.recipes = response.body;
          console.log(response.body);
        });
    }
  },
  created() {
    this.fetchRecipes();
  },
};

</script>

<style>

#titel {
  font-weight: bold;
}

</style>
