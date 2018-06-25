<template>
	<div class="home">
		<div id="placeholder">
			<h1>{{msgBig}}</h1>
			<h2>{{msgSmall}}</h2>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      msgBig: "Loging you out...",
      msgSmall: ""
    };
  },
  methods: {
    init() {
      api
        .call("post", "/logout")
        .then(({ data }) => {
          this.msgBig = "You have successfully logged out!";
          this.msgSmall = "You will be redirected shortly.";
          auth.logout();
          this.$router.push("/");
        })
        .catch(({ response }) => {
          this.msgBig = "There was an issue during logout.";
          this.msgSmall = `Please wait a bit and try again.`;
          auth.logout();
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
h2 {
  font-size: 14px;
  font-weight: lighter;
  color: grey;
}
</style>
