<template>
  <div class="pets">
    <h1>Pets</h1>
    <ul>
      <item
        v-for="pet in pets"
        :id="pet.creatureId"
        :name="pet.name"
        :type="'npc'"
        :quality="pet.qualityId"
        :icon="pet.icon"
        :key="pet.index"
      ></item>
    </ul>
  </div>
</template>


<script>
import Item from "@/components/Item.vue";
export default {
  data() {
    return {
      pets: ""
    };
  },
  components: {
    Item
  },
  mounted() {
    api
      .callWow(
        url.getCharacterData(
          this.$store.state.character.realm,
          this.$store.state.character.name,
          "pets"
        )
      )
      .then(data => {
        this.pets = data.data.pets.collected;
      })
      .catch(response => console.log(response));
  },
  created() {

  }
};
</script>
