<template>
  <div class="items">
    <h1>Items</h1>
    <ul>
      <li v-for="item in items">
        <item v-if="item.id != undefined" :id="item.id" :name="item.name" :quality="item.quality" :icon="item.icon"></item>
      </li>
      <a href="#" data-wowhead="item=152361"></a>
      <a href="#" data-wowhead="item=134365"></a>
    </ul>
  </div>
</template>


<script>
import Item from "@/components/Item.vue";
export default {
  data() {
    return {
      items: ""
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
          "items"
        )
      )
      .then(data => {
        this.items = data.data.items;
      })
      .catch(response => console.log(response));
  },
  created() {
    let wowheadTooltips = document.createElement('script');
    wowheadTooltips.setAttribute('src', 'http://wow.zamimg.com/widgets/power.js')
    document.head.appendChild(wowheadTooltips);
  }
};
</script>
