<template>
  <div class="selectHelper">
      <div class="announcement" v-if="!characterExists">
        <div class="announcement-text">Please select a character!</div>
      </div>
      <div class="announcement" v-else>
        <div class="announcement-text">Pick a category under your character pane to explore</div>
      </div>
  </div>
</template>

<style scoped>

</style>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  components: {},
  methods: {
		...mapMutations(['character'])
	},
  computed: {
    characterExists() {
      return !_.isEmpty(this.character);
    }
  }
};
</script>

<style scoped>
.announcement {
  text-align: center;
}
</style>

