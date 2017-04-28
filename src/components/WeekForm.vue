<template>
<!-- Choose component -->
<div v-if="showForm" class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Fyll i din info här för att generera en veckomeny</h3>
    </div>
  </div>
  <form v-on:submit="postMenu">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label">Username:</label>
          <input type="text" class="form-control" v-model="userName2">
        </div>
        <div class="form-group">
          <label class="control-label">Din ålder:</label>
          <input type="number" class="form-control" v-model="form.age">
        </div>
        <div class="form-group">
          <label class="control-label">Kön:</label>
          <label class="radio">
              <input type="radio" data-toggle="radio" id="sex" name="sex" value="MALE" v-model="form.sex">
              <i></i>Man
            </label>
          <label class="radio">
              <input type="radio" data-toggle="radio" id="sex" name="sex" value="FEMALE" v-model="form.sex">
              <i></i>Kvinna
            </label>
            <div class="form-group">
              <label class="control-label">Vikt:</label>
              <input type="number" class="form-control" v-model="form.weight" placeholder="kg">
            </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label">Längd:</label>
          <input type="number" class="form-control" v-model="form.height" placeholder="cm">
        </div>
        <div class="form-group">
          <label class="control-label">Aktivitetsnivå:</label>
          <select class="form-control" v-model="form.activityLevel">
            <option disabled>Välj</option>
            <option value="1.2">Liten eller ingen motion</option>
            <option value="1.375">Lätt motion (träning 1-3 dagar per vecka)</option>
            <option value="1.55">Medel motion (träning 3-5 dagar per vecka)</option>
            <option value="1.725">Tung motion (träning 6-7 dagar per vecka)</option>
            <option value="1.9">Mycket tung motion (2 gånger per dag, extra tungt)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="control-label">Viktpreferens:</label>
          <select class="form-control" v-model="form.goal">
            <option disabled>Välj</option>
            <option value="STAY">Behålla vikt</option>
            <option value="DECREASE">Minska i vikt</option>
            <option value="INCREASE">Öka i vikt</option>
          </select>
        </div>
      <!--  <div class="form-group">
          <label class="control-label">Jag vill undvika detta:</label>
          <input type="text" class="form-control" v-model="form.allergy">
        </div> -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <button type="submit" class="btn btn-fill btn-success btn-lg pull-right">
            Generera veckomeny
          </button>
          <button v-on:click="olofNoob" class="btn btn-fill btn-success btn-lg pull-left">
              Nooblof
            </button>
      </div>
    </div>
  </form>
</div>

<!-- Loading component -->
<div v-else-if="showLoading" class="container">
  <div class="row">
    <h3 class="text-center">Laddar...</h3>
  </div>
</div>

<!-- View component -->
<div v-else-if="showList" class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Här är din veckomeny</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Kcal per portion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipe in recipes">
            <td>{{recipe.title}}</td>
            <td>{{recipe.energyKcalPerPortion}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'week-form',
  data() {
    return {
      showForm: true,
      showLoading: false,
      showList: false,
      userName2: '',
      form: {
        sex: 'FEMALE',
        activityLevel: 'Välj',
        goal: 'Välj'
      },
      recipes: [],
      users: []
    };
  },
  methods: {
    postMenu(e) {
      const postRequest = {
        userName: this.form.userName,
        age: this.form.age,
        sex: this.form.sex,
        weight: this.form.weight,
        height: this.form.height,
        activityLevel: this.form.activityLevel,
        goal: this.form.goal
        // allergy: this.form.allergy
      };
      console.log(postRequest.userName);
      this.showForm = false;
      this.showLoading = true;
      this.$http.get(`http://localhost:9000/user/name/${this.postRequest.userName}`)
        .then((response) => {
          console.log(response);
          this.recipes = response.body;
          this.showLoading = false;
          this.showList = true;
        });
      e.preventDefault();
    },
    olofNoob() {
      this.$http.get(`http://localhost:9000/user/name/${this.userName2}`)
      .then((response) => {
        console.log(response);
        this.users = response.body;
        this.showLoading = false;
        this.showList = true;
      });
    },
  }
};
</script>

<style scoped></style>
