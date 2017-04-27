<template>
  <div class="container">
    <h1>Select user</h1>
    <div class="row">
        <h2>Name, Age, Sex, Weight, Length, ActivityLevel, Goals</h2>
      <div class="col-md-6">
        <h2 v-for="user in users">{{user.name}}, {{user.age}}, {{user.weight}}, {{user.length}}, {{user.activityLevel}}, {{user.goal}}</h2>
      </div>
      <div class="col-md-6">
        <h2 v-for="user in users">{{user.name}}, {{user.age}}, {{user.weight}}, {{user.length}}, {{user.activityLevel}}, {{user.goal}}</h2>
      </div>
    </div>
    <button v-on:click="getFood">Food item 320</button>
    <p v-for="food in foods"> her ska det sta {{foods.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      users: [
        {
          name: 'Alice',
          age: 20 /*
          sex: 'Female',
          weight: 60,
          length: 160,
          activityLevel: 2.0,
          goal: 'Stay'
          */
        },
        {
          name: 'Bob'
        /* age: 76,
          sex: 'Male',
          weight: 102,
          length: 180,
          activityLevel: 1.2,
          goal: 'Stay'
          */
        }
      ],
      foods: []
    };
  },
  methods: {
    getFood() {
      this.$http.get('http://localhost:9000/food/320')
        .then((response) => {
          this.foods = response.body;
          console.log(response.body.name);
        //  this.recipes = response.body;
        });
    }
    /* DETTA ÄR JU INGEN JSON NEJ.
    fetchBob() {
      this.$http.get('http://localhost:9000/bob/menu/nutrient')
        .then((response) => {
          this.recipes = response.body;
        });
    }
    fetchAlice() {
      this.$http.get('http://localhost:9000/alice/menu/nutrient')
        .then((response) => {
          this.recipes = response.body;
        });
    } */
  }, /*
  created() {
    this.getFood();
    // this.fetchBob();
    // this.fetchAlice();
  }, */

};
</script>

<style>


</style>
