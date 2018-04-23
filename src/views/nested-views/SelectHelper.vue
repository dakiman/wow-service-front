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
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  created() {},
  computed: {
    characterExists() {
      return !_.isEmpty(this.$store.state.character);
    }
  }
};
</script>
