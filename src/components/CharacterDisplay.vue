<template>
  <div class="characterDisplay">
    <div class="field">
      <label class="label">Character Name</label>
      <input class="input is-small sharpen" type="text" placeholder="Character" v-model="name">
    </div>
    <div class="field">
      <label class="label">Realm</label>
      <input class="input is-small sharpen" type="text" placeholder="Realm" v-model="realm">
    </div>
    <div class="field">
      <button v-bind:class="{ 'is-loading': loading }" class="button is-primary sharpen" @click="getChar">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterDisplay",
  data() {
    return {
      loading: false,
      name: "Dakis",
      realm: "the maelstrom",
    };
  },
  props: {
    // msg: String
  },
  methods: {
    getChar() {
      this.loading = true;
      api
        .callWow(url.getCharacter(this.realm, this.name))
        .then(({ data }) => {
          this.$store.commit('setCharacter', data);
          this.loading = false;
        })
        .catch(response => {
          this.$store.commit('setCharacter', {});
          console.log(response);
          this.loading = false;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  width: 100%;
}
</style>
