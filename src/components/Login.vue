<template>
  <div class="container">
    <h1>Select user</h1>
    <input type="text" class="form-control" placeholder="Enter name" v-model="getUser">
    <button v-on:click="startGetUser">Get user!</button>
    <div class="row">
      <div class="col-md-3">
        <h2 id="titel">Name: <br> Age: <br> Sex: <br> Weight: <br> height: <br>ActivityL: <br>Goals: </h2>
      </div>
      <div class="col-md-3">

        <h2 v-if="showNewUser">{{users.name}} <br> {{users.age}} <br> {{users.sex}} <br> {{users.weight}} <br> {{users.height}} <br> {{users.activityLevel}} <br> {{users.goal}} <br> </h2>
      </div>
      <div class="col-md-3">
        <h2>{{usersAlice.name}} <br> {{usersAlice.age}} <br> {{usersAlice.sex}} <br> {{usersAlice.weight}} <br> {{usersAlice.height}} <br> {{usersAlice.activityLevel}} <br> {{usersAlice.goal}} <br> </h2>
      </div>
      <div class="col-md-3">
        <h2>{{usersBob.name}} <br> {{usersBob.age}} <br> {{usersBob.sex}} <br> {{usersBob.weight}} <br> {{usersBob.height}} <br> {{usersBob.activityLevel}} <br> {{usersBob.goal}} <br> </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      getUser: '',
      showNewUser: false,
      users: [],
      usersBob: [],
      usersAlice: [], // Det här gillar jag inte alls
      foods: []
    };
  },
  methods: {
    startGetUser() {
      this.lookupAlice();
      this.showNewUser = true;
    },
    lookupAlice() {
      this.$http.get(`http://localhost:9000/user/name/${this.getUser}`)
        .then((response) => {
          this.users = response.body;
        });
    },
    fetchBob() {
      this.$http.get('http://localhost:9000/user/name/Bob')
        .then((response) => {
          this.usersBob = response.body;
        });
    },
    fetchAlice() {
      this.$http.get('http://localhost:9000/user/name/Alice')
        .then((response) => {
          this.usersAlice = response.body;
        });
    },

  },
  created() {
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
