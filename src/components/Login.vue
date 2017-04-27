<template>
  <div class="container">
    <h1>Select user</h1>
    <div class="row">
      <div class="col-md-4">
        <h2 id="titel">Name: <br> Age: <br> Sex: <br> Weight: <br> height: <br>ActivityLevel: <br>Goals: </h2>
      </div>
      <div class="col-md-4">
        <h2>{{usersalice.name}} <br> {{usersalice.age}} <br> {{usersalice.sex}} <br> {{usersalice.weight}} <br> {{usersalice.height}} <br> {{usersalice.activityLevel}} <br> {{usersalice.goal}} <br> </h2>
      </div>
      <div class="col-md-4">
        <h2>{{users.name}} <br> {{users.age}} <br> {{users.sex}} <br> {{users.weight}} <br> {{users.height}} <br> {{users.activityLevel}} <br> {{users.goal}} <br> </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      users: [],
      usersalice: [], // Det här gillar jag inte alls
      foods: []
    };
  },
  methods: {
    getFood() {
      this.$http.get('http://localhost:9000/food/320')
        .then((response) => {
          this.foods = response.body;
          console.log(response.body);
        });
    },
    fetchBob() {
      this.$http.get('http://localhost:9000/user/name/Bob')
        .then((response) => {
          this.users = response.body;
          console.log(response.body, 'Bob');
        });
    },
    fetchAlice() {
      this.$http.get('http://localhost:9000/user/name/Alice')
        .then((response) => {
          this.usersalice = response.body;
          console.log(response.body, 'Alice');
        });
    }
  },
  created() {
    this.getFood();
    this.fetchBob();
    this.fetchAlice();
  },

};
</script>

<style>

#titel {
  font-weight: bold;
}

</style>
