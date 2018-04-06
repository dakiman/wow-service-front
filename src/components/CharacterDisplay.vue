<template>
  <div class="characterDisplay">
    <div style>
      <div v-if="character.name">
        <div class="column has-text-left" v-if="character.name">
          <span class="">{{ character.name }}, Level {{ character.level }} {{ raceName }} {{ className }}</span>
          <br>
          <img :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail" alt="">
          <div class="field">
            <button class="button is-primary sharpen" @click="clearChar">Search another character</button>
          </div>
        </div>
      </div>
      <div v-else >
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CharacterDisplay",
  data() {
    return {
      loading: false,
      name: "Dakis",
      realm: "the maelstrom"
    };
  },
  props: {},
  methods: {
    getChar() {
      this.loading = true;
      api
        .callWow(url.getCharacter(this.realm, this.name))
        .then(({ data }) => {
          this.$store.commit("setCharacter", data);
          this.loading = false;
        })
        .catch(response => {
          this.$store.commit("unsetCharacter");
          console.log(response);
          this.loading = false;
        });
    },
    clearChar() {
      this.$store.commit("unsetCharacter");
    }
  },
  computed: {
    ...mapGetters(["character"]),
    className() {
      return info.getClass(this.character.class);
    },
    raceName() {
      return info.getRace(this.character.race);
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
