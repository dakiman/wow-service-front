<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p v-html="info"></p>
    <button @click="getCharacter">Get character</button>
    <input type="text" v-model="character">
    <input type="text" v-model="realm">
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "This is char info",
      character: "Juliakulia",
      realm: "the-maelstrom"
    };
  },
  methods: {
    getCharacter() {
      // delete axios.defaults.headers.common['Authorization'];
      axios.get(url.getCharacter(this.realm, this.character), {
      // axios.get('https://eu.api.battle.net/wow/data/character/races?locale=en_GB&apikey=f8g9xhcpeebdcpma9a5u8fpnswqfwcaa', {
        // headers: {Authorization: null}
      transformRequest: [(data, headers) => { delete headers.common.Authorization; return data }]
      })
        .then(({data}) => {
          this.info = JSON.stringify(data)
        })
        .catch(({response}) => {
          console.log(response);
        })
    }
  }
}
</script>
