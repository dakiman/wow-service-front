<template>
	<div class="item">
		<a :style="{ 'padding-left' : '40px !important', 'background' : 'url(http://wow.zamimg.com/images/wow/icons/medium/'+ item.icon + '.jpg' + ' ) left center no-repeat' }" :data-wowhead="type + '=' + itemIndex" :class="['q' + itemQuality]" v-if="itemIndex != undefined">[ {{item.name}} ]</a>
	</div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {};
  },
  props: ["item", "type"],
  created() {},
  computed: {
    itemIndex() {
      if (this.item.id != undefined) return this.item.id;
      else if (this.item.creatureId != undefined) return this.item.creatureId;
      else return undefined;
    },
    itemQuality() {
      if (this.item.quality != undefined) return this.item.quality;
      else if (this.item.qualityId != undefined) return this.item.qualityId;
      else return undefined;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
