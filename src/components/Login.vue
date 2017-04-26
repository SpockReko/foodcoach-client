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
      ]
    };
  /* },
  methods: {
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
    }
  },
  created() {
    this.fetchBob();
    this.fetchAlice();
  } */
  },
};
</script>

<style>


</style>
