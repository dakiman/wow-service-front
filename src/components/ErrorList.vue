<template>
	<div class="errorList">
		<div class="errorsList" v-if="errorsCheck">
			<ul>
				<li v-for="error in errors" :key="error[0]">{{error[0]}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: "errorList",
  data() {
    return {};
  },
  props: ["errors"],
  computed: {
    errorsCheck() {
      return !_.isEmpty(this.errors);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.errorsList {
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 20px;
  padding: 5px;
}
</style>
