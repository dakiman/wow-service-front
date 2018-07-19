<template>
	<div class="mounts">
		{{ this.collected }} / {{ this.notCollected }}
		<item v-for="mount in mounts" :key="mount.index" :item="mount" :type="'spell'"></item>
	</div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      mounts: "",
      collected: 0,
      notCollected: 0
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
            "mounts"
          )
        )
        .then(({ data }) => {
          this.mounts = data.mounts.collected;
          this.collected = data.mounts.numCollected;
          this.notCollected = data.mounts.numNotCollected;
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
    ...mapGetters(["character"])
  }
};
</script>

