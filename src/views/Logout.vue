<template>
  <div class="home">
    <h1>You have successfully logged out!</h1>
    <h2>You will be redirected shortly.</h2>
  </div>
</template>

<script>

export default {
    methods: {
        init(){
          axios
            .post('http://127.0.0.1:8000/api/logout')
            .then(({data}) => {
              auth.logout();
              // setTimeout(this.$router.push('/'), 3000);
              // this.$router.push('/')
              setTimeout(() => {
                this.$router.push('/')
              }, 3000)
            })
            .catch(({response}) => {
              // alert(response.data.message);
            })
        }
    },
    mounted() {
      this.init();
    } 
}
</script>

<style>
  h2 {
    font-size: 14px;
    font-weight: lighter;
    color: grey;
  }
</style>
