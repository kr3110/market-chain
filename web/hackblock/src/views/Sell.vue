<template>
  <main class="container">
    <div class="section">
     <h1 class="center darkblue-text">Sell
    </h1>
  </div>

    <div class="row">
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="" id="first_name" type="text" class="validate">
          <label for="first_name">Product name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Product Id</label>
        </div>
      </div>

    </form>
  </div>
    </div>

  </main>
</template>

<script>
$(document).ready(function() {
   Materialize.updateTextFields();
 });
// // @ is an alias to /src
// import VueCharts from 'vue-chartjs'
// import { Bar, Line } from 'vue-chartjs'
import axios from 'axios';
import LineChart from '@/components/LineChart.vue';
import Doughnut  from '@/components/DoughnutChart.vue';
export default {
  name: 'buy',
  data: {
    lineData: []
  },

   created() {
        //
        //  axios.get(`http://184.172.250.206:31090/api/Business/kk@gmail.com`)
        //  .then(response => {
        //   // JSON responses are automatically parsed.
        //   console.log(response.data);
        // })
        // .catch(e => {
        //   this.errors.push(e)
        // })
   },
   methods: {
     getLineData: function () {
      //getLineData
     }
   }
};
</script>
