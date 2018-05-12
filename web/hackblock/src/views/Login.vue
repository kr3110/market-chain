<template>
  <div class="login">
    <img src="../assets/logo.png">
    <input type="text" name="username" v-model="input.username" placeholder="Username">
    <input type="password" name="password" v-model="input.password" placeholder="Password">
    <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="login()" name="button"> Login </button>
    <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="register()" name="button"> Sign up </button>
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
