<template>
  <div class="items">
    <!-- <h1>Items</h1> -->
<pulse-loader :loading="true"></pulse-loader>

    <ul>
      <item
        v-for="item in items"
        :id="item.id"
        :name="item.name"
        :type="'item'"
        :quality="item.quality"
        :icon="item.icon"
        :key="item.id"
        v-if="item.id != undefined"
      ></item>
    </ul>
  </div>
</template>


<script>
import Item from "@/components/Item.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data() {
    return {
      items: ""
    };
  },
  components: {
    Item,
    PulseLoader
  },
  mounted() {
    api
      .callWow(
        url.getCharacterData(
          this.$store.state.character.realm,
          this.$store.state.character.name,
          "items"
        )
      )
      .then(data => {
        this.items = data.data.items;
      })
      .catch(response => console.log(response));
  },
  created() {

  }
};
</script>
