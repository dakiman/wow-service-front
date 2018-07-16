<template>
	<div class="confimation">
		<h1>Welcome to the community! <router-link to="/login">Click here</router-link> to login.</h1>
	</div>
</template>

<script>
export default {
  data() {
    return {
      name: "Placeholder"
    };
  },
  created() {
    console.log(this.$route.params.name)
    if (this.$route.params.name) {
      this.name = this.$route.params.name;
    }
  }
};
</script>

