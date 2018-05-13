<template>
  <div class="home">


    <form action="#">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" placeholder="Search by Email" v-model="searchData" id="sample1">
      </div>
    </form>
    <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="button" @click="searchByEmail()"> Search </button>

    <div class="mdl-grid">
       <div class="mdl-cell mdl-cell--6-col center">
         <div class="hackblock-card mdl-card mdl-shadow--2dp">
           <div class="mdl-card__title mdl-card--expand">

            <br>
            <table style="width:50%">
              <tr style="text-align: left; ">Business Info</tr>
              <!-- <tr style="text-align: center">              Business Info</tr> -->
              <tr>
                <td style="padding-right: 50px">Name:</td>   <td>{{this.business.name}}</td>
              </tr>
              <tr>
                <td style="padding-right: 50px">Type:</td> <td>{{this.business.type}}</td>
              </tr>
              <tr style="padding-right: 50px">
                <td>Account Balance:</td><td> {{this.business.accountBalance}}</td>
              </tr>
              <!-- <tr>{{this.business.address.street}}</tr>
              <tr>
                {{this.business.address.zip}}
              </tr>
              <tr>
                {{this.business.address.city}}
              </tr>
              <tr>
                {{this.business.address.country}}
              </tr> -->

            </table>

           <div class="mdl-card__actions mdl-card--border">
             <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
               <!-- Account Balance: {{this.business.accountBalance}} -->
             </a>
             <!-- <div class="mdl-layout-spacer"></div> -->
             <!-- <i class="material-icons">event</i> -->
           </div>
         </div>
         <!-- <button type="button" name="button" :click="getLineData()" >Click me</button> -->

       </div>



       <!-- <div class="mdl-cell mdl-cell--3-col">
         <div class="hackblock-card md2-card mdl-shadow--2dp">
           <div class="mdl-card__title mdl-card--expand">
             <!-- <h4>
               Featured event:<br>
               May 24, 2016<br>
               7-11pm
             </h4>
             <bar-chart :options="options" :width="674" :height="400"></bar-chart>
           </div>
           <div class="mdl-card__actions mdl-card--border">
             <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
               Add to Calendar
             </a>
             <div class="mdl-layout-spacer"></div>
             <i class="material-icons">event</i>
           </div>
         </div>
       </div> -->
    </div>

    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
// import VueCharts from 'vue-chartjs'
// import { Bar, Line } from 'vue-chartjs'
import axios from 'axios';
import LineChart from '@/components/LineChart.vue';
import Doughnut  from '@/components/DoughnutChart.vue';
import BarChart  from '@/components/BarChart.vue';

import { Bar, mixins  } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'home',
  extends: Bar,
  data: function(){
    return {
    barStuff: [],
    barData: [],
    options: {},
    barLabels:[],
    searchData: "",
    business: {},
    errors: []
  }
  },
  components: {
     'line-chart': LineChart,
     'donut-chart': Doughnut
   },
   created() {
          axios.get(`http://184.172.250.206:31090/api/Contract/`)
         .then(response => {
          // JSON responses are automatically parsed.
          this.barStuff = response.data

          console.log(JSON.parse(JSON.stringify(this.barStuff)));
          for(var i = 0; i < this.barStuff.length; i++) {
            this.barData.push( this.barStuff[i].totalPrice);
            this.barLabels.push(this.barStuff[i].contractId);
          }
          console.log("barData");
          console.log(this.barData);
          console.log("labelData");
          console.log(this.barLabels);
        })
        .catch(e => {
          this.errors.push(e)
        })
   },
   mixins: [mixins.reactiveProp],
   methods: {
     searchIsClicked: function(){
       return true;
     },
     searchByEmail: function(){
       console.log("searchByEmail() called");
       console.log(this.searchData);
         axios.get('http://184.172.250.206:31090/api/Business/' + this.searchData)
         .then(response => {
          // JSON responses are automatically parsed.
          this.business = response.data
          console.log(JSON.parse(JSON.stringify(this.business)));
        })
        .catch(e => {
          this.errors.push(e)
          console.log("error: ");
          console.log(this.errors);
        })
     },
     drawBarChart () {
        // Overwriting base render method with actual data.
        this.renderChart({
          labels: this.barLabels,
          datasets: [
            {
              label: 'Contract Total Price',
              backgroundColor: '#f87979',
              data: this.barData
            }
          ]
        })
      }

     // getLineData: function () {
     //     console.log("getLineData() called");
     //     axios.get(`http://jsonplaceholder.typicode.com/posts`)
     //     .then(response => {
     //      // JSON responses are automatically parsed.
     //      this.lineData = response.data
     //      console.log(this.lineData);
     //    })
     //    .catch(e => {
     //      this.errors.push(e)
     //    })
     // }
   }
};
</script>

<style lang="scss">
.hackblock-card.mdl-card {
  width: 512px;
  height: 256px;
  background: #3E4EB8;
}
.hackblock-card.md2-card{
  width: 512px;
  height: 256px;
  background: #ffb3b3;
}
.hackblock-card > .mdl-card__actions {
  border-color: rgba(255, 255, 255, 0.2);
}
.hackblock-card > .mdl-card__title {
  align-items: flex-start;
}
.hackblock-card > .mdl-card__title > h4 {
  margin-top: 0;
}
.hackblock-card > .mdl-card__actions {
  display: flex;
  box-sizing:border-box;
  align-items: center;
}
.hackblock-card > .mdl-card__actions > .material-icons {
  padding-right: 10px;
}
.hackblock-card > .mdl-card__title,
.hackblock-card > .mdl-card__actions,
.hackblock-card > .mdl-card__actions > .mdl-button {
  color: #fff;
}

.center {
    margin: auto;
    width: 50%;
    padding: 10px;
    padding-left: 30px;
}

</style>
