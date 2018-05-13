<template>
  <main class="container">
    <div class="row">
      <div class="col s12 m6">
      </div>
      <div class="col s12 m6">
      </div>
    </div>

  </main>
</template>

<script>
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
