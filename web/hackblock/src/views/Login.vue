<template>
  <div class="login container">
    <div class="section"></div>
      <div class="section"></div>
        <div class="section"></div>
    <img id="logo" src="../assets/marketchainlogo.png">
    <div class=" container">
    <input type="text" name="username" v-model="input.username" placeholder="Username">
    <input type="password"  name="password" v-model="input.password" placeholder="Password">
      <button type="button" class="blue darken-4 btn" @click="login()" name="button">Login </button>
            <button type="button" class="blue darken-4 btn" @click="register()" name="button"> Sign up  </button>
  </div>
  </div>
</template>

<script>


export default {
  name: 'login',
  data(){
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login(){
      if(this.input.username != "" && this.input.password != "") {
          if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "home" });
          } else {
              console.log("The username and / or password is incorrect");
          }
      } else {
          console.log("A username and password must be present");
      }
    }
  }
};
</script>
<style>
#logo{
  height: 200px;
  width: 200px;
}
</style>
