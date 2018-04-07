<template>
  <div class="dashboard">
    <div class="container">
      <div class="columns is-8">
        <div class="column is-one-third">
          <CharacterDisplay></CharacterDisplay>
        </div>
        <div class="column">
          <router-link to="/dashboard/items">Items</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import CharacterDisplay from "@/components/CharacterDisplay.vue";

export default {
  data() {
    return {};
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
