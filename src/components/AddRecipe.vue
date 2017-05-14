<template>
<div class="container">
  <div class="row">
    <h3>Lägg till recept via url</h3>
    <div class="col-md-6">
      <div class="form-group">
        <p> URL </p>
        <input type="text" class="form-control" placeholder="klistra in url" v-model="getURL">
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <button class="btn btn-fill btn-success btn-lg pull-right"
        v-on:click="addRecipe" v-bind:title="message">Lägg till</button>
      </div>
    </div>
  </div>
  <div class="row" v-if="showSuccess">
      <p id="titel" >{{recipes.title}} </p>
      <div class="col-md-6">
      <p id="titel" >Ingredienser</p>
      <p v-for="ingredient in ingredients"> {{ingredient.food.name}} </p>
    </div>
    <div class="col-md-6">
      <p id="titel" >Mängd</p>
      <p v-for="ingredient in ingredients"> {{Math.round(ingredient.amount.quantity)}} {{ingredient.amount.unit}}</p>
    </div>
  </div>
  <div class="row" v-if="showSuccess">
    <div class="col-sm-2">
      <p id="titel">Kcal: </p>
      <p>{{recipes.energyKcal}}kcal</p>
    </div>
    <div class="col-sm-2">
      <p id="titel">Protein: </p>
      <p>{{recipes.protein}}g</p>
    </div>
    <div class="col-sm-2">
      <p id="titel">Kolhydrater: </p>
      <p>{{recipes.carbohydrates}}g</p>
    </div>
    <div class="col-sm-2">
      <p id="titel">Fett: </p>
      <p>{{recipes.fat}}g</p>
    </div>
    <div class="col-sm-2">
      <p id="titel">Koldioxid: </p>
      <p>{{recipes.co2PerPortion / 100}}kg</p>
    </div>
  </div>
  </div>

</div>
</template>





<script>
export default {
  name: 'addRecipe',
  data() {
    return {
      message: 'Lägg till',
      showSuccess: false,
      getURL: '',
      // menus: [],
      recipes: [],
      ingredients: [],
    };
  },
  methods: {
    addRecipe() {
      this.showSuccess = true;
      this.$http.get(`http://localhost:9000/parseUrl?url=${this.getURL}`)
        .then((response) => {
          console.log(response.body);
          this.recipes = response.body;
          this.ingredients = response.body.ingredients;
          // console.log(response.body.ingredients);
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
