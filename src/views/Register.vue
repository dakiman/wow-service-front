<template>
	<div class="register">
		<h1>Join the community!</h1>
		<div class="container">
			<div class="column is-one-third is-offset-one-third">
				<div class="field">
					<label class="label pull-left">Name</label>
					<div class="control">
						<input class="input sharpen" :class="{ 'is-danger' : errors.name != null }" type="text" placeholder="Name" v-model="name">
					</div>
				</div>
				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input class="input sharpen" :class="{ 'is-danger' : errors.email != null }" type="email" placeholder="Email" v-model="email">
					</div>
				</div>
				<div class="field">
					<label class="label">Password</label>
					<div class="control">
						<input class="input sharpen" :class="{ 'is-danger' : errors.password != null }" type="password" placeholder="Password" name="password" v-model="password">
					</div>
				</div>
				<div class="field">
					<label class="label">Confirm password</label>
					<div class="control">
						<input class="input sharpen" type="password" placeholder="Confirm password" name="">
					</div>
				</div>
				<div class="field">
					<p class="control">
						<button @click="register" id="registerBtn" :class="{ 'is-loading' : loading}" class="button is-success sharpen is-fullwidth">
							Register
						</button>
					</p>
				</div>
				<errorList :errors="this.errors"></errorList>
			</div>
		</div>
	</div>
</template>

<script>
import ErrorList from "@/components/ErrorList.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
      loading: false
    };
  },
  components: {
    ErrorList
  },
  methods: {
    register() {
      this.loading = true;
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      api
        .call("post", "/register", data)
        .then(({ data }) => {
          this.$router.push({
            name: "confirmation",
            params: { name: this.name }
          });
        })
        .catch(({ response }) => {
          this.errors = response.data.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
label {
  color: white;
  float: left;
  margin-left: 5px;
}
h1 {
  font-size: 28px;
  color: white;
  padding: 12px;
}
#registerBtn {
  height: 40px;
}
</style>

