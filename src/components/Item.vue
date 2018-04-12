<template>
  <div class="items">
      <a :style="{ 'padding-left' : '18px !important', 'background' : 'url(http://wow.zamimg.com/images/wow/icons/tiny/'+ icon + '.gif' + ' ) left center no-repeat' }" :data-wowhead="'item=' + id" :class="['q' + quality]">[{{name}}]</a>
  </div>
</template>

<script>

export default {
  name: "Items",
  data() {
    return {

    };
  },
  props: ['id', 'name', 'quality', 'icon'],
  created () {
  }
};
</script>

<style scoped lang="scss">

</style>
