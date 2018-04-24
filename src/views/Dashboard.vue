<template>
  <div class="dashboard">
    <div class="container">
      <div class="columns is-8">
        <div class="column is-one-third">
          <CharacterDisplay></CharacterDisplay>
          <CharacterNav></CharacterNav>
        </div>
        <div class="column box">
          {{currentRoute}}
          <pulse-loader :loading="loading"></pulse-loader>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="column">

      </div>
    </div>
  </div>

</template>

<script>
import CharacterDisplay from "@/components/CharacterDisplay.vue";
import CharacterNav from "@/components/CharacterNav.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { mapGetters } from "vuex";
import lodash from "lodash";

export default {
  data() {
    return {};
  },
  components: {
    CharacterDisplay,
    CharacterNav,
    PulseLoader
  },
  computed: {
    ...mapGetters(["loading"]),
    currentRoute() {
      return _.capitalize(this.$route.name);
    }
  }
};
</script>

<style scoped>
.info-container {
  margin-top: 20px;
}
</style>
