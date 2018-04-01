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
      character: "Packaged",
      realm: "the-maelstrom"
    };
  },
  methods: {
    getCharacter() {
      axios.get(url.getCharacter(this.realm, this.character), {
      // axios.get('https://eu.api.battle.net/wow/data/character/races?locale=en_GB&apikey=f8g9xhcpeebdcpma9a5u8fpnswqfwcaa', {
        // headers: {'Access-Control-Allow-Origin': '*'}
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
