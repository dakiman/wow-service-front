<template>
	<div class="items">
		<item v-for="item in items" :key="item.id" :item="item" :type="'item'"></item>
	</div>
</template>


<script>
import Item from "@/components/Item.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      items: ""
    };
  },
  components: {
    Item
  },
  methods: {
    ...mapMutations(["enableLoading", "disableLoading"]),
    apiCall() {
      this.enableLoading();
      api
        .callWow(
          url.getCharacterData(
        	this.character.realm,
            this.character.name,
            "items"
          )
        )
        .then(({ data }) => {
          this.items = data.items;
        })
        .catch(response => console.log(response))
        .finally(() => {
          this.disableLoading();
        });
    }
  },
  mounted() {
    this.apiCall()
  },
  computed: {
    ...mapGetters(["character"])
  },
  created() {}
};
</script>

<style lang="sass" scoped>

</style>

