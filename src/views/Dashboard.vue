<template>
  <div class="dashboard">
    <div class="container">
      <div class="columns is-8">
        <div class="column is-one-third">
          <CharacterDisplay></CharacterDisplay>
          <CharacterNav></CharacterNav>
        </div>
        <div class="column">
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

export default {
  data() {
    return {};
  },
  components: {
    CharacterDisplay,
    CharacterNav
  }
};
</script>

<style scoped>
.info-container {
  margin-top: 20px;
}
</style>
