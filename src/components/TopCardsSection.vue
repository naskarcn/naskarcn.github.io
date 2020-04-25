<template>
  <div class="container my-3">
    <h4>{{this.$store.getters.STATUSDATA.country}}</h4>
    <div class="row">
      <div class="col-12 col-md-3 col-lg-3 mt-3">
        <div class="text-center text-info card-wrapper">
          <h5>Confirmed</h5>
          {{this.$store.getters.STATUSDATA.confirmed}}
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 mt-3">
        <div class="text-center text-warning card-wrapper">
          <h5>Active</h5>
          {{this.$store.getters.STATUSDATA.active}}
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 mt-3">
        <div class="text-center text-success card-wrapper">
          <h5>Recovered</h5>
          {{this.$store.getters.STATUSDATA.recovered}}
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 mt-3">
        <div class="text-center text-danger card-wrapper">
          <h5>Deceased</h5>
          {{this.$store.getters.STATUSDATA.death}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TopCardsSection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .card-wrapper {
        padding: 52px 0;
        border-radius: 10px;
    }
</style>
