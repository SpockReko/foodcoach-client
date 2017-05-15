<template>
<div class="container">
  <div class="row">
    <h3>Lägg till recept via url</h3>
    <div class="col-md-6">
      <div class="form-group">
        <p> URL </p>
        <input type="text" class="form-control" placeholder="klistra in url" v-model="getURL"
        v-on:keyup.enter="addRecipe">
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
    <div class="col-md-12">
      <h3 class="text-primary">{{recipes.title}}, {{recipes.portions}} portion{{plural}}</h3>
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
            <td>{{Math.round(ingredient.amount.quantity)}} {{ingredient.amount.unit}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- <div class="row" v-if="showSuccess">
      <p id="titel" >{{recipes.title}} </p>
      <div class="col-md-6">
      <p id="titel" >Ingredienser</p>
      <p v-for="ingredient in ingredients"> {{ingredient.food.name}} </p>
    </div>
    <div class="col-md-6">
      <p id="titel" >Mängd</p>
      <p v-for="ingredient in ingredients"> {{Math.round(ingredient.amount.quantity)}} {{ingredient.amount.unit}}</p>
    </div>
  </div> -->

  <div class="row" v-if="showSuccess">
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
      <p>{{recipes.energyKcal}}kcal</p>
    </div>
    <div class="col-sm-2">
      <p id="titel" class="text-danger">Protein: {{Math.round(protein + transp)}} E% </p>
      <p>{{recipes.protein}}g</p>
    </div>
    <div class="col-sm-2">
      <p id="titel" class="text-info">Kolhydrater: {{Math.round(carbs+ transp)}} E%</p>
      <p>{{recipes.carbohydrates}}g</p>
    </div>
    <div class="col-sm-2">
      <p id="titel" class="text-warning">Fett: {{Math.round(fat + transp)}} E%</p>
      <p>{{recipes.fat}}g</p>
    </div>
    <div class="col-sm-2">
      <p id="titel" class="text-success">Koldioxid: </p>
      <p>{{recipes.co2PerPortion / 100}}kg</p>
    </div>
  </div>
  <div class="row" v-if="showSuccess">
      <h3 class="text-primary">RDI för recept {{recipes.name}} </h3>
      <div class="col-md-8">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Vitamin</th>
              <th>Mängd</th>
              <th>RDI uppfyllt</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="nutrient in nutrients">
                  <td >{{nutrient.name}}</td>
                  <td >{{Math.round(nutrient.amount)}} {{nutrient.unit}}</td>
                  <td> {{nutrientsDefualt.amount}}</td>
              </tr>
          </tbody>
        </table>
      </div>
  </div>

</div>
</template>





<script>
export default {
  name: 'addRecipe',
  data() {
    return {
      plural: '',
      message: 'Lägg till',
      showSuccess: false,
      getURL: '',
      getUser: 'default',
      recipes: [],
      ingredients: [],
      nutrients: [],
      users: [],
      nutrientsDefualt: [],
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
          this.nutrients = response.body.nutrients;
          if (this.recipes.portions > 1) { this.plural = 'er'; }
          this.fat = ((this.recipes.fat * 9) /
          this.recipes.energyKcal) * 100;
          this.protein = ((this.recipes.protein * 4) /
          this.recipes.energyKcal) * 100;
          this.carbs = ((this.recipes.carbohydrates * 4) /
          this.recipes.energyKcal) * 100;
          this.transp = (100 - (this.carbs + this.fat + this.protein)) / 3;
          // console.log(response.body.ingredients);
        });
      this.$http.get(`http://localhost:9000/user/name/${this.getUser}`)
            .then((response) => {
              this.users = response.body;
              this.nutrientsDefualt = response.body.nutrients;
              console.log(response.body);
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
