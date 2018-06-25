<template>
  <div class="pets">
    <!-- <h1>Pets</h1> -->
    <ul>
      <item v-for="pet in uniquePets" :id="pet.creatureId" :name="pet.name" :type="'npc'" :quality="pet.qualityId" :icon="pet.icon" :key="pet.index"></item>
    </ul>
  </div>
</template>


<script>
import Item from "@/components/Item.vue";
import { mapGetters, mapMutations } from 'vuex';

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
		...mapMutations(['enableLoading', 'disableLoading'])
  },
  mounted() {
    this.enableLoading()
    api
      .callWow(
        url.getCharacterData(
          this.character.realm,
          this.character.name,
          "pets"
        )
      )
      .then(({data}) => {
        this.pets = data.pets.collected
      })
      .catch(response => console.log(response))
      .finally(() => {
				this.disableLoading()
      });
  },
  computed: {
		...mapGetters(['character']),
    uniquePets: function() {
      return _.uniqBy(this.pets, 'creatureId')
    }
  }
};
</script>
