<template>
<div class="container">
  <div class="row">
    <h3>Optimera recept för din användare</h3>
    <div class="col-md-6">
      <p> Användare </p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="getUser">
    </div>
    <div class="col-md-6">
      <p> Recept by id </p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="getNumber">
      <button class="btn btn-fill btn-success btn-lg pull-right" v-on:click="receptOpti" >Optimera</button>
    </div>
  </div>
<div class="row">
    <div class="col-md-6">
      <p id="titel" v-if="showOptRecipe">{{recipes.title}} </p>
    <p v-for="ingredient in ingredients"> {{ingredient.food.name}} </p>
  </div>
  <div class="col-md-6">
    <p id="titel" v-if="showOptRecipe">{{ingredients[0].amount.unit}} </p>
    <p v-for="ingredient in ingredients"> {{ingredient.amount.quantity}} </p>
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
      getNumber: '',
      recipes: [],
      ingredients: [],
      // foods [],
    };
  },
  methods: {
    receptOpti() {
      this.showOptRecipe = true;
      this.$http.get(`http://localhost:9000/recipe/optimize/user/${this.getNumber}?userName=${this.getUser}`)
        .then((response) => {
          console.log(response);
          this.recipes = response.body;
          this.ingredients = response.body.ingredients;
          // this.foods = response.body.ingredients[0].food;
          console.log(response.body.ingredients);
        });
    },
  },
};

</script>

<style>

#titel {
  font-weight: bold;
}

</style>
