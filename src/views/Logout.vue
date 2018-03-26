<template>
  <div class="home">
    <div id="placeholder">
      <h1>Logging out...</h1> 
    </div>
    <div id="success" class="result-div ">
      <h1>You have successfully logged out!</h1>
      <h2>You will be redirected shortly.</h2>
    </div>
    <div id="failure" class="result-div">
      <h1>There was an issue during logout.</h1>
      <h2>Please wait a few minutes and try again.</h2>
    </div>
  </div>
</template>

<script>

export default {
    methods: {
        init(){
          axios
            .post('http://127.0.0.1:8000/api/logout')
            .then(({data}) => {
              document.getElementById('placeholder').style.visibility = 'visible';
              document.getElementById('success').style.visibility = 'visible';
              auth.logout();
              setTimeout(() => {
                this.$router.push('/')
              }, 2000)
            })
            .catch(({response}) => {
              document.getElementById('placeholder').style.visibility = 'visible';              
              document.getElementById('failure').style.visibility = 'visible';            
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
  .result-div {
    visibility: hidden
  }
</style>
