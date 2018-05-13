<template>
<main id="buy_container" class="container">
  <div class="section"></div>
  <div class="section"></div>

  <div id="buying" class="row">


  </div>

</main>
</template>

<script>
// // @ is an alias to /src
// import VueCharts from 'vue-chartjs'
// import { Bar, Line } from 'vue-chartjs'
import axios from 'axios';
import LineChart from '@/components/LineChart.vue';
import Doughnut from '@/components/DoughnutChart.vue';
export default {
  name: 'buy',
  data: {
    lineData: []
  },

  created() {
     axios.get(`http://184.172.250.206:31090/api/Product`)
     .then(response => {
       let temp=JSON.parse(JSON.stringify(response.data));
      for(let i=0;i<temp.length;i++){
        $("#buying").append(`
          <div class="col s12 m6">
           <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg">
              <span class="card-title">${temp[i].name}</span>
            </div>
            <div class="card-action">
              <a class="modal-trigger" href="#${temp[i].name}Modal">BUY</a>
            </div>
          </div>
          </div>
          `);
          $('#buy_container').append(`
           <!-- Modal Structure -->
           <div id="${temp[i].name}Modal" class="modal">
             <div class="modal-content">
               <h4 class="Center">${temp[i].name}</h4>
               <div class="section"></div>
               <h5>Price: ${temp[i].price}</h5>
              <h5>Owner: ${temp[i].owner}</h5>
              <h5>Origin Data: ${temp[i].origin}</h5>
             </div>
             <div class="modal-footer">
               <button id="finalizeBuy" class="btn waves-effect waves-green" type="submit" name="action">FinalizeBuy</button>
               <button class="btn modal-close waves-effect waves-green red darken-4" type="submit" name="action">Cancel</button>
             </div>
           </div>

           `)
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getLineData: function() {
      //getLineData
    }
  }
};
</script>
