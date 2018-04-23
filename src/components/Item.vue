<template>
  <div class="item">
      <a :style="{ 'padding-left' : '40px !important', 'background' : 'url(http://wow.zamimg.com/images/wow/icons/medium/'+ icon + '.jpg' + ' ) left center no-repeat' }" :data-wowhead="type + '=' + id" :class="['q' + quality]">[{{name}}]</a>
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
