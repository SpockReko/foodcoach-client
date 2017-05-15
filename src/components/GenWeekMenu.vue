<template>
<div class="container">
  <div class="row">
    <h3>Generera en meny</h3>
    <div class="col-md-6">
      <p> Användarnamn </p>
      <input type="text" class="form-control" placeholder="Ange användarnamn" v-model="getUser" v-on:keyup.enter="receptOpti">
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <p> Antal recept </p>
        <input type="text" class="form-control" placeholder="" v-model="getNumber" v-on:keyup.enter="receptOpti">
      </div>
      <div class="form-group">
        <button class="btn btn-fill btn-success btn-lg pull-right" v-on:click="receptOpti" >Generera</button>
      </div>
    </div>
  </div>

  <div class="row" v-if="showGenMenu">
    <div class="col-md-3">
      <p id="titel">Recept</p>
      <p v-for="recipe in recipes">{{recipe.title}}</p>
    </div>
    <div class="col-md-4">
      <p id="titel">Inköpslista</p>

      <!-- <ul>
        <li v-for="(ingredient, index) in ingredients">
          {{ingredient.food.name}} {{ingredient.amount.quantity}} {{ingredient.amount.unit}}
          <button v-bind:title="message" v-on:click="ingredients.splice(index, 1)" class="btn btn-fill btn-danger btn-xs pull-right" >X</button>
          <br>
        </li>
      </ul> -->
       <!-- <p v-for="ingredient in ingredients">{{ingredient.food.name}}</p> -->

       <table class="table table-striped">
         <thead>
           <tr>
             <th>Ingredienser</th>
             <th>Mängd</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="(ingredient, index) in ingredients">
             <td>{{ingredient.food.name}}</td>
             <td>{{ingredient.amount.quantity}} {{ingredient.amount.unit}}</td>
             <td> <button v-bind:title="message" v-on:click="ingredients.splice(index, 1)" class="btn btn-fill btn-danger btn-xs pull-right" >X</button> </td>
           </tr>
         </tbody>
       </table>
    </div>
    <!-- <div class="col-md-3">
      <p id="titel">Mängd</p>
      <p v-for="ingredient in ingredients" > {{ingredient.amount.quantity}} {{ingredient.amount.unit}}</p>

    </div>
    <div class="col-md-3">
      <p id="titel">Ta bort</p>
      <button v-bind:title="message" v-for="ingredient in ingredients" v-on:click="removeIngredient()" class="btn btn-fill btn-danger btn-lg" >X</button>
    </div> -->
  </div>

</div>
</template>





<script>
export default {
  name: 'genWeekMenu',
  data() {
    return {
      message: 'Ta bort',
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
          this.ingredients = response.body.ingredients;
          this.recipes = response.body.recipes;
          console.log(response.body.ingredients);
        });
    },
    // removeIngredient(){
    //   this.$http.get(`http://localhost:9000/menu/nutrient/user?name=${this.getUser}&nrOfRecipes=${this.getNumber}`)
    // }
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
