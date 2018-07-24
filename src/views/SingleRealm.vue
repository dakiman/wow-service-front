<template>
  <div class="singleRealm">
    <h1>This is a single realm {{$route.params.slug}}</h1>
  </div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
  mounted() {
		this.init();
	},
	methods: {
		init() {
			api
			.call('get', "/realms/" + this.$route.params.slug)
			.then(({data}) => {
				console.log(data)
			})
			.catch(response => {
				console.log(response)
			})
			.finally(() => {

			});
		}
	}
}
</script>

