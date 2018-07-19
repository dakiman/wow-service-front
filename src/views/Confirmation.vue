<template>
	<div class="confimation">
		<h1>Welcome to the community {{ this.name }}!
			<router-link to="/login">Click here</router-link> to login.</h1>
	</div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    if (this.$route.params.name) {
      this.name = this.$route.params.name;
    }
  }
};
</script>

