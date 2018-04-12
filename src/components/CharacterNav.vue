<template>
  <div class="CharacterNav">
    <div class="container is-fluid">
    <router-link to="/dashboard/items" tag="button" class="button sharpen">Items</router-link>
    <router-link to="/dashboard/pets" tag="button" class="button sharpen">Pets</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "CharacterNav",
  data() {
    return {

    };
  },
  created () {
  }
};
</script>

<style scoped lang="scss">
button {
  font-size: 18px;
  width: 65px;
  margin: 3px;
    &.router-link-exact-active {
      border: 1px solid black !important;
      font-weight: bold;
    }
  }
</style>
