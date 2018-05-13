<template>
<main class="container">
  <div class="section">
    <h1 class="center blue-text">Sell
    </h1>
  </div>

  <div class="row">
    <div class="row">
      <div class="col s0 m3"></div>
      <form class="col s12 m6">
        <div class="row">

          <div class="input-field col s12 ">
            <input v-model="input.name" id="product_name" type="text" class="validate">
            <label for="product_name">Product name</label>
          </div>
          <div class="input-field col s12">
            <input v-model="input.id" id="product_id" type="text" class="validate">
            <label for="product_id">Product Id</label>
          </div>
          <div class="input-field col s12">
            <input v-model="input.price" id="price" type="text" class="validate">
            <label for="price">Product price</label>
          </div>
          <button type="button" class="blue darken-4 btn" @click="submitProduct()" name="button">Submit</button>
        </div>
      </form>

      <div class="col s0 m3"></div>

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
import Doughnut from '@/components/DoughnutChart.vue';
export default {
  name: 'buy',
  data: function() {
    return {
      input: {
        name: "",
        id: "",
        price: ""

      }
    }
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
    submitProduct: function() {
      let that = this;
      var namef = $('#product_name')[0].value;
      var idf = $('#product_id')[0].value;
      var pricef=  $('#price')[0].value;
      axios.post('http://184.172.250.206:31090/api/Product', {
          $class: "org.example.mktchain.Product",
          name: namef,
          id: idf,
          price: pricef,
          origin: new Date().toString(),
          owner: "kk@gmail.com"
        })
        .then(function(response) {

          alert("product has been put in the buy section.")
          that.$router.push('/home');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getLineData: function() {
      //getLineData
    }
  }
};
</script>
