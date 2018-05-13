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
          <!-- Add spacer, to align navigation to the right -->

          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/home">Home</router-link> </a>
            <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/about">About</router-link> </a>
            <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/buy">Buy</router-link> </a>
            <a class="mdl-navigation__link" href=""><router-link class="navLink" to="/sell">Sell</router-link> </a>
            <div id="nav" class="mdl-navigation__link">
            </div>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer s12 m0 black">
        <nav class="mdl-navigation black">
          <a class="mdl-navigation__link black" href=""><router-link class="navLink" to="/home">Home</router-link> </a>
          <a class="mdl-navigation__link black" href=""><router-link class="navLink" to="/about">About</router-link> </a>
          <a class="mdl-navigation__link black" href=""><router-link class="navLink" to="/buy">Buy</router-link> </a>
          <a class="mdl-navigation__link black" href=""><router-link class="navLink" to="/sell">Sell</router-link> </a>

        </nav>
      </div>
      <router-view @authenticated="setAuthenticated" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "kk@gmail.com",
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
