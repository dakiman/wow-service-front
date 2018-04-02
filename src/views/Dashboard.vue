<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p v-html="info"></p>
    <button @click="getChar">Get character</button>
    <input type="text" v-model="character">
    <input type="text" v-model="realm">
    <div class="info-container">
      <span v-html="battlegroup"></span>
      <br>
      <span v-html="className"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "This is char info",
      character: "Sernaos",
      realm: "The Maelstrom",
      battlegroup: "",
      className: ""
    };
  },
  methods: {
    getChar() {
      api
        .callWow(url.getCharacter(this.realm, this.character))
        .then(({ data }) => {
          this.className = info.getClass(data.class);
          this.battlegroup = data.battlegroup;
        })
        .catch(response => console.log(response));
    }
  }
};
</script>

<style>
.info-container {
  margin-top: 20px;
}
</style>
