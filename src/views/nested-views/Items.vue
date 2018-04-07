<template>
  <div class="items">
    <h1>Items</h1>
    <ul>
      <li v-for="item in items">
        <a :href="'http://www.wowhead.com/item=' + item.id">{{item.name}}</a>
      </li>
      <a href="http://www.wowhead.com/spell=18562">a</a>
        <a href="http://www.wowhead.com/item=134365" upgd="3" class=""></a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: "",
    };
  },
  mounted() {
    api
      .callWow(
        url.getCharacterData(this.$store.state.character.realm, this.$store.state.character.name, 'items')
      )
      .then(data => {
        this.items = data.data.items
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
