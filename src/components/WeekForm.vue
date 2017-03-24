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
          <label class="control-label">Din ålder:</label>
          <input type="number" class="form-control" v-model="form.age">
        </div>
        <div class="form-group">
          <label class="control-label">Kön:</label>
          <label class="radio">
              <input type="radio" data-toggle="radio" id="sex" name="sex" value="man" v-model="form.sex">
              <i></i>Man
            </label>
          <label class="radio">
              <input type="radio" data-toggle="radio" id="sex" name="sex" value="woman" v-model="form.sex">
              <i></i>Kvinna
            </label>
        </div>
        <div class="form-group">
          <label class="control-label">Vikt:</label>
          <input type="number" class="form-control" v-model="form.weight">
        </div>
        <div class="form-group">
          <label class="control-label">Längd:</label>
          <input type="number" class="form-control" v-model="form.length">
        </div>
      </div>
      <div class="col-md-6">
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
            <option value="1">Behålla vikt</option>
            <option value="2">Gå ned i vikt</option>
            <option value="3">Gå upp i vikt</option>
          </select>
        </div>
        <div class="form-group">
          <label class="control-label">Jag vill undvika detta:</label>
          <input type="text" class="form-control" v-model="form.allergy">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <button type="submit" class="btn btn-fill btn-success btn-lg pull-right">
            Generera veckomeny
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
      form: {
        sex: 'woman',
        activityLevel: 'Välj',
        goal: 'Välj'
      },
      recipes: []
    };
  },
  methods: {
    postMenu(e) {
      const postRequest = {
        age: this.form.age,
        sex: this.form.sex,
        weight: this.form.weight,
        length: this.form.length,
        activityLevel: this.form.activityLevel,
        goal: this.form.goal,
        allergy: this.form.allergy
      };
      this.showForm = false;
      this.showLoading = true;
      this.$http.post('http://localhost:9000/weekmenu', postRequest)
        .then((response) => {
          this.recipes = response.body;
          this.showLoading = false;
          this.showList = true;
        });
      e.preventDefault();
    }
  }
};
</script>

<style scoped></style>
