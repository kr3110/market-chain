<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- Uses a transparent header that draws on top of the layout's background -->

    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" >
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">HackBlock</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/home">Home</router-link> </a>
            <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/about">About</router-link> </a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">HackBlock</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/home">Home</router-link> </a>
          <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/about">About</router-link> </a>
        </nav>
      </div>
    </div>

    <div id="nav">
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
        <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "asdf@gmail.com",
        password: "temp1234"
      }
    }
  },
  mounted() {
    if(!this.authenticated){
      this.$router.replace({name: "login"});
    }
  },
  methods: {
    setAuthenticated(status){
        this.authenticated = status;
    },
    logout(){
      this.authenticated = false;
    }
  }
}
</script>


<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navLink{
  text-decoration: none;
}
</style>
