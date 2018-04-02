<template>
    <div>
        <h1>Login</h1>

        <p>
            <label for="email">Email</label>

            <input type="text" name="email" v-model="email">
        </p>

        <p>
            <label for="password">Password</label>

            <input type="password" name="password" v-model="password">
        </p>

        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'daki@daki.com',
      password: 'password'
    }
  },

  methods: {
    login () {
      let data = {
        email: this.email,
        password: this.password
      }

      axios
        .post('http://127.0.0.1:8000/api/login', data)
        .then(({ data }) => {
          auth.login(data.token, data.user)
          this.$router.push('/dashboard')
        })
        .catch(({ response }) => {
          alert(response.data.message)
        })
    }
  }
}
</script>
