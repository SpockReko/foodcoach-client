<template>
<div class="container">
  <div class="row">
    <h3>Optimera recept för din användare</h3>
    <div class="col-md-6">
      <div class="form-group">
        <p> Användarnamn </p>
        <input type="text" class="form-control" placeholder="Ange användarnamn"
        v-model="getUser" v-on:keyup.enter="receptOpti">
      </div>
    </div>
    <div class="col-md-6">
      <!-- <p> Välj recept </p>
      <input type="text" class="form-control" placeholder="Sök" v-model="getNumber"> -->
      <div class="form-group">
        <label class="control-label"> Välj recept</label>
        <select class="form-control" v-model="getRecipe" v-on:keyup.enter="receptOpti">
          <option disabled>Välj</option>
          <option v-for="recipe in recipes">{{recipe.title}}</option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-fill btn-success btn-lg pull-right" v-on:click="receptOpti" >Optimera</button>
      </div>

    </div>
  </div>
  <div class="row" v-if="showOptRecipe">
    <div class="col-md-12">
      <h3 class="text-primary">{{optrecipes.title}}, {{optrecipes.portions}} portion{{plural}} </h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Ingredienser</th>
            <th>Mängd</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ingredient in ingredients">
            <td>{{ingredient.food.name}}</td>
            <td>{{Math.round(ingredient.amount.quantity * 10) / 10}} {{ingredient.amount.unit}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<!-- <div class="row" v-if="showOptRecipe">
    <p id="titel" >{{optrecipes.title}} </p>
    <div class="col-md-6">
    <p id="titel" >Ingredienser</p>
    <p v-for="ingredient in ingredients"> {{ingredient.food.name}} </p>
  </div>
  <div class="col-md-6">
    <p id="titel" >Mängd</p>
    <p v-for="ingredient in ingredients"> {{Math.round(ingredient.amount.quantity)}} {{ingredient.amount.unit}}</p>
  </div>
</div> -->
<!-- Math.round(({{optrecipes.fat * 9}} / {{optrecipes.energyKcal}} * 100) / 100) -->
<div class="row" v-if="showOptRecipe">
  <div class="progress">
    <div class="progress-bar progress-bar-danger":style="{width: protein + transp + '%'}">
    </div>
    <div class="progress-bar progress-bar-info" :style="{width: carbs + transp + '%'}">
    </div>
    <div class="progress-bar progress-bar-warning" :style="{width: fat + transp + '%'}">
    </div>
  </div>
  <div class="col-sm-2">
    <p id="titel" class="text-primary">Kcal: </p>
    <p>{{optrecipes.energyKcal}}kcal</p>
  </div>
  <div class="col-sm-2">
    <p id="titel" class="text-danger">Protein: {{Math.round(protein + transp)}} E% </p>
    <p>{{optrecipes.protein}}g</p>
  </div>
  <div class="col-sm-2">
    <p id="titel" class="text-info">Kolhydrater: {{Math.round(carbs+ transp)}} E%</p>
    <p>{{optrecipes.carbohydrates}}g</p>
  </div>
  <div class="col-sm-2">
    <p id="titel" class="text-warning">Fett: {{Math.round(fat + transp)}} E%</p>
    <p>{{optrecipes.fat}}g</p>
  </div>
  <div class="col-sm-2">
    <p id="titel" class="text-success">Koldioxid: </p>
    <p>{{optrecipes.co2PerPortion / 100}}kg</p>
  </div>
</div>
<div class="row" v-if="showOptRecipe">
    <h3 class="text-primary">Vitaminbehov för {{users.name}} </h3>
    <div class="col-md-8">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Vitamin</th>
            <th>RDI</th>
            <!-- <th>Procent uppfyllt</th> -->
          </tr>
        </thead>
        <tbody>
            <tr v-for="nutrient in nutrients">
                <td >{{nutrient.name}}</td>
                <td >{{Math.round(nutrient.amount)}} {{nutrient.unit}}</td>
            </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Receptet innehåller</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="optNutrient in optNutrients">
            <td >{{Math.round(optNutrient.amount)}} {{optNutrient.unit}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
</div>
</template>

<script>
// document.getElementById('fat').style.width =
// Math.round((this.optrecipes.fat * 9 / this.optrecipes.energyKcal * 100));
// document.getElementById('fat').style.width = '35%';
export default {
  name: 'optrecipe',
  data() {
    return {
      plural: '',
      showOptRecipe: false,
      getUser: '',
      getRecipe: '',
      optrecipes: [],
      ingredients: [],
      recipes: [],
      users: [],
      nutrients: [],
      optNutrients: [],
      percentage: [],
      fat: '',
      carbs: '',
      protein: '',
      transp: '',
    };
  },
  methods: {
    // getPercentage() {
    //   for(i=0; i = this.nutrients.lenght(); i++){
    //     this.percentage[i] = ( this.optNutrients[i]  /this.nutrients[i] ) * 100;
    //     console.log(this.percentage);
    //   }
    // },
    receptOpti() {
      this.showOptRecipe = true;
      this.$http.get(`http://localhost:9000/recipe/optimize/user/${this.getRecipe}?userName=${this.getUser}`)
        .then((response) => {
          this.optrecipes = response.body;
          this.ingredients = response.body.ingredients;
          this.optNutrients = response.body.nutrients;
          console.log(response.body);
          if (this.optrecipes.portions > 1) { this.plural = 'er'; }
          this.fat = ((this.optrecipes.fat * 9) /
          this.optrecipes.energyKcal) * 100;
          this.protein = ((this.optrecipes.protein * 4) /
          this.optrecipes.energyKcal) * 100;
          this.carbs = ((this.optrecipes.carbohydrates * 4) /
          this.optrecipes.energyKcal) * 100;
          this.transp = (100 - (this.carbs + this.fat + this.protein)) / 3;
          console.log(response.ingredients);
        });
      this.$http.get(`http://localhost:9000/user/name/${this.getUser}`)
          .then((response) => {
            this.users = response.body;
            this.nutrients = response.body.nutrients;
            console.log(response.body);
          });
      // getPercentage();
    },
    fetchRecipes() {
      this.$http.get('http://localhost:9000/recipes')
        .then((response) => {
          this.recipes = response.body;
        });
    },
  },


  created() {
    this.fetchRecipes();
  },
  // fatpercentage(value) {
  //   return ((value / this.optrecipes.energyKcal) * 100);
    // console.log(5 * 9);
    // return ((this.optrecipes.fat * 9) / this.optrecipes.energyKcal) * 100;

    // Math.round(( this.optrecipes.fat * 9 / this.optrecipes.energyKcal * 100));
  // },
};

</script>

<style>

#titel {
  font-weight: bold;
}


</style>
