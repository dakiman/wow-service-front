<template>
	<div class="realms">
		<h1>This is a realms page</h1>
		<div v-for="realm in this.realms" :key="realm.id">
			<hr>
			<router-link :to="{name: 'singleRealm', params: {slug: realm.slug }}">{{realm.name}}</router-link>
			<br>{{realm.battlegroup}}
			<br>
			<span class="online" v-if="realm.status">Online</span>
			<span class="offline" v-else>Offline</span>
			<br>
			<span class="offline" v-if="realm.queue"> QUEUE</span>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      realms: {}
    };
  },
  methods: {
    ...mapMutations(["enableLoading", "disableLoading"]),
    apiCall() {
      api
        .call("get", "/realms")
        .then(({ data }) => {
          this.realms = data.realms;
        })
        .catch(response => {
          console.log(response);
        })
        .finally(() => {
          this.disableLoading();
        });
    }
  },
  computed: {
    ...mapGetters(["loading"])
  },
  mounted() {
    this.apiCall();
  }
};
</script>

<style lang="scss" scoped>
.online {
  color: green;
}
.offline {
  color: red;
}
</style>

