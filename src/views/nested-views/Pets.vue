<template>
	<div class="pets">
		<!-- <h1>Pets</h1> -->
		<item v-for="pet in uniquePets" :key="pet.index" :item="pet" :type="'npc'"></item>
	</div>
</template>


<script>
import Item from "@/components/Item.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      pets: ""
    };
  },
  components: {
    Item
  },
  methods: {
    ...mapMutations(["enableLoading", "disableLoading"]),
    apiCall() {
      api
        .callWow(
          url.getCharacterData(
            this.character.realm,
            this.character.name,
            "pets"
          )
        )
        .then(({ data }) => {
          this.pets = data.pets.collected;
        })
        .catch(response => console.log(response))
        .finally(() => {
          this.disableLoading();
        });
    }
  },
  mounted() {
    this.enableLoading();
    this.apiCall();
  },
  computed: {
    ...mapGetters(["character"]),
    uniquePets: function() {
      return _.uniqBy(this.pets, "creatureId");
    }
  }
};
</script>
