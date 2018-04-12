<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/logout" v-if="authenticated && user">Logout</router-link>
      <router-link to="/login" v-else>Login</router-link>
      <div v-if="authenticated && user">
          <p>Hello, {{ user.name }}</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      authenticated: auth.check(),
      user: auth.user
    }
  },
  mounted () {
    Event.$on('userLoggedIn', () => {
      this.authenticated = true
      this.user = auth.user
    })
    Event.$on('userLoggedOut', () => {
      this.authenticated = false
      this.user = null
    })
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
.sharpen {
  border-radius: 0 !important;
}

$spaceamounts: (5, 10, 15, 20, 25, 30, 35, 40, 45, 50); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
  @each $side in $sides {
    .m-#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space}px !important;
    }

    .p-#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}
</style>
