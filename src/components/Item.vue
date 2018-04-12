<template>
  <div class="item">
      <a :style="{ 'padding-left' : '18px !important', 'background' : 'url(http://wow.zamimg.com/images/wow/icons/tiny/'+ icon + '.gif' + ' ) left center no-repeat' }" :data-wowhead="type + '=' + id" :class="['q' + quality]">[{{name}}]</a>
  </div>
</template>

<script>

export default {
  name: "Item",
  data() {
    return {

    };
  },
  props: ['id', 'name', 'quality', 'icon', 'type'],
  created () {
  }
};
</script>

<style scoped lang="scss">

</style>
