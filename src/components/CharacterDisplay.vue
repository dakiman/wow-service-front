<template>
  <div class="characterDisplay">
    <div class="column">
      <div class="box m-t-20">
        <figure v-if="character.name" figure class="avatar">
          <img :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail">
        </figure>
        <div v-if="!character.name">
          <div class="field">
            <div class="control">
              <input class="input is-large sharpen" placeholder="Character Name" autofocus="" v-model="name">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-large sharpen" placeholder="Your Password" v-model="realm">
            </div>
          </div>
          <button class="button is-block is-primary sharpen is-large is-fullwidth" :class="{ 'is-loading' : loading }" @click="getChar">Search</button>
        </div>
        <div v-else>
          <span class="">{{ character.name }}, Level {{ character.level }} {{ raceName }} {{ className }}</span>
          <button class="button is-primary sharpen is-fullwidth m-t-25" @click="clearChar">Search another character</button>
          <br>
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
          console.log(data);
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
      this.$store.commit("unsetCharacter")
      this.$router.push('/dashboard')
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
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
