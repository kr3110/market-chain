<template>
  <div class="home ">
    <div class="mdl-grid">
       <div class="mdl-cell mdl-cell--6-col">
         <div class="hackblock-card mdl-card mdl-shadow--2dp">
           <div class="mdl-card__title mdl-card--expand">

             <h4>Some chart</h4>
             <line-chart ></line-chart>
           </div>
           <div class="mdl-card__actions mdl-card--border">
             <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
               Blah blah blah
             </a>
             <div class="mdl-layout-spacer"></div>
             <i class="material-icons">event</i>
           </div>
         </div>
         <button type="button" name="button" :click="getLineData()" >Click me</button>

       </div>



       <div class="mdl-cell mdl-cell--3-col">
         <div class="hackblock-card md2-card mdl-shadow--2dp">
           <div class="mdl-card__title mdl-card--expand">
             <!-- <h4>
               Featured event:<br>
               May 24, 2016<br>
               7-11pm
             </h4> -->
             <donut-chart></donut-chart>
           </div>
           <div class="mdl-card__actions mdl-card--border">
             <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
               Add to Calendar
             </a>
             <div class="mdl-layout-spacer"></div>
             <i class="material-icons">event</i>
           </div>
         </div>
       </div>
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
export default {
  name: 'home',
  data: {
    lineData: []
  },
  components: {
     'line-chart': LineChart,
     'donut-chart': Doughnut
   },
   created() {

         axios.get(`http://184.172.250.206:31090/api/Business/kk@gmail.com`)
         .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e)
        })
   },
   methods: {
     getLineData: function () {
         console.log("getLineData() called");
         axios.get(`http://jsonplaceholder.typicode.com/posts`)
         .then(response => {
          // JSON responses are automatically parsed.
          this.lineData = response.data
          console.log(this.lineData.data);
        })
        .catch(e => {
          this.errors.push(e)
        })
     }
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

</style>
