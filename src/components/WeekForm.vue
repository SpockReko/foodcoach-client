<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Fyll i din info här för att generera en veckomeny</h3>
    </div>
  </div>
  <form action="http://localhost:9000/weekmenu" method="post">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="dateBorn" class="control-label">Födelsedatum:</label>
          <input type="date" class="form-control" id="dateBorn" name="dateBorn">
        </div>
        <div class="form-group">
          <label class="control-label">Kön:</label>
          <label class="radio">
              <input type="radio" data-toggle="radio" id="sex" name="sex" value="man">
              <i></i>Man
            </label>
          <label class="radio">
              <input type="radio" data-toggle="radio" id="sex" name="sex" value="woman" checked>
              <i></i>Kvinna
            </label>
        </div>
        <div class="form-group">
          <label for="weight" class="control-label">Vikt:</label>
          <input type="number" class="form-control" id="weight" name="weight">
        </div>
        <div class="form-group">
          <label for="length" class="control-label">Längd:</label>
          <input type="number" class="form-control" id="length" name="length">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="activityLevel" class="control-label">Aktivitetsnivå:</label>
          <select class="form-control" id="activityLevel" name="activityLevel">
              <option selected disabled>Välj</option>
              <option value="1.2">Liten eller ingen motion</option>
              <option value="1.375">Lätt motion (träning 1-3 dagar per vecka)</option>
              <option value="1.55">Medel motion (träning 3-5 dagar per vecka)</option>
              <option value="1.725">Tung motion (träning 6-7 dagar per vecka)</option>
              <option value="1.9">Mycket tung motion (2 gånger per dag, extra tungt)</option>
            </select>
        </div>
        <div class="form-group">
          <label for="goal" class="control-label">Viktpreferens:</label>
          <select class="form-control" id="goal" name="goal">
              <option selected disabled>Välj</option>
              <option value="1">Behålla vikt</option>
              <option value="2">Gå ned i vikt</option>
              <option value="3">Gå upp i vikt</option>
            </select>
        </div>
        <div class="form-group">
          <label for="allergy" class="control-label">Jag vill undvika detta:</label>
          <input type="text" class="form-control" id="allergy" name="allergy">
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
</template>

<script>
export default {
  name: 'week-form',
};
</script>

<style scoped></style>
