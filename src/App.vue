<template>
	<div id="app" class="">
		<nav class="navbar is-dark light-shadow">
			<div class="navbar-brand">
				<a class="navbar-item" >
					<img src="https://dcnetworks.ie/wp/wp-content/uploads/2017/11/placeholder-logo-2.png" alt="" width="" height="">
				</a>
				<!-- TODO: FIX THIS HAMBURGER -->
				<div class="navbar-burger burger" data-target="navbarExampleTransparentExample" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active')">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="navbarExampleTransparentExample" class="navbar-menu">
				<div class="navbar-end">
					<router-link class="navbar-item" to="/">Home</router-link>
					<router-link class="navbar-item" to="/about">About</router-link>
					<router-link class="navbar-item" to="/realms">Realms</router-link>
					<router-link class="navbar-item" to="/dashboard">Dashboard</router-link>
					<template v-if="authenticated && user">
					</template>
					<template v-else>
						<router-link class="navbar-item" to="/register">Register</router-link>
						<router-link class="navbar-item" to="/login">Login</router-link>
					</template>
					<div class="navbar-item has-dropdown is-hoverable" v-if="authenticated && user">
						<div class="navbar-link">
							Hello, {{user.name}}
						</div>
						<div class="navbar-dropdown is-right">
							<router-link class="navbar-item" to="/profile">Profile</router-link>
							<router-link class="navbar-item" to="/logout">Logout</router-link>

							<!-- <a class="navbar-item is-active" href=""> -->
							<!-- Profile -->
							<!-- </a> -->
						</div>
					</div>
				</div>
			</div>
		</nav>
		<router-view/>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      authenticated: auth.check(),
      user: auth.user
    };
  },
  mounted() {
    Event.$on("userLoggedIn", () => {
      this.authenticated = true;
      this.user = auth.user;
    });
    Event.$on("userLoggedOut", () => {
      this.authenticated = false;
      this.user = null;
    });
  },
  computed: {}
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
.navbar {
  margin-bottom: 45px;
  // background-color: #332c28
}

.light-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

$spaceamounts: (
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50
); // Adjust this to include the pixel amounts you need.
$sides: (
  top,
  bottom,
  left,
  right
); // Leave this variable alone
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
.sharpen {
  border-radius: 0px;
}
</style>
