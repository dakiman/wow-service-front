<template>
  <div class="dashboard">
    <div class="container">
      <div class="columns is-8">
        <div class="column is-one-third">
          <div v-if="character.name">
            <div class="column has-text-left" v-if="character.name">
              <span class="">{{ character.name }}, Level {{ character.level }} {{ raceName }} {{ className }}</span>
              <br>
              <img :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail" alt="">
            </div>
          </div>
          <div v-else>
            <CharacterDisplay></CharacterDisplay>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CharacterDisplay from "@/components/CharacterDisplay.vue";

export default {
  data() {
    return {
      // character: character
    };
  },
  computed: {
    ...mapGetters([
      'character'
    ]),
    className () {
      return info.getClass(this.character.class)
    },
    raceName () {
      return info.getRace(this.character.race)
    }
  },
  components: {
    CharacterDisplay
  }
};
</script>

<style scoped>
.info-container {
  margin-top: 20px;
}
</style>
