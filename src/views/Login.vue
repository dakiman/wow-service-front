<template>
	<div>
		<div class="container">
			<div class="column is-one-third is-offset-one-third">
				<h1 id="loginTitle">Enter your credentials</h1>
				<div class="field">
					<p class="control">
						<input class="input sharpen" type="email" placeholder="Email" name="email" v-model="email">
					</p>
				</div>
				<div class="field">
					<p class="control">
						<input class="input sharpen" type="password" placeholder="Password" v-model="password">
					</p>
				</div>
				<div class="field">
					<p class="control">
						<button @click="login" id="loginBtn" :class="{ 'is-loading' : loading}" class="button is-success sharpen is-fullwidth">
							Login
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
      email: "daki@daki.com",
      password: "password",
      loading: false,
      errors: null
    };
  },
  components: {
    ErrorList
  },
  methods: {
    login() {
      this.loading = true;
      let data = {
        email: this.email,
        password: this.password
      };
      api
        .call("post", "/login", data)
        .then(({ data }) => {
          auth.login(data.token, data.user);
          this.$router.push("/dashboard");
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

<style>
#loginTitle {
  font-size: 24px;
  color: white;
  margin: 15px;
}
#loginBtn {
  font-size: 20px;
  font-weight: 600;
}
.errorsList {
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 20px;
  padding: 5px;
}
</style>

