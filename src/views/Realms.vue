<template>
	<div class="realms">
		<div class="container">
			<div class="column is-one-third is-offset-one-third">
				<errorList class="m-b-10" :errors="this.errors"></errorList>
				Enter realm name<br>
				<input type="text" @keyup="filterRealmsByName($event)">
				<br>
				<button class="button is-primary sharpen m-t-15" :class="{ 'is-loading' : loading }" @click="updateRealmData">Request Update</button>
			</div>
		</div>
		<div v-for="realm in filteredRealms" :key="realm.id">
			<hr>
			<router-link :to="{name: 'singleRealm', params: { slug: realm.slug }}">{{realm.name}}</router-link>
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
import ErrorList from "@/components/ErrorList.vue";

export default {
  data() {
    return {
      realms: {},
      filteredRealms: {},
      errors: {}
    };
  },
  components: {
    ErrorList
  },
  methods: {
    ...mapMutations(["enableLoading", "disableLoading"]),
    apiCall() {
      this.enableLoading();
      api
        .call("get", "/realms")
        .then(({ data }) => {
          this.realms = data.realms;
          this.filteredRealms = this.realms;
        })
        .catch(response => {
          console.log(response.data);
        })
        .finally(() => {
          this.disableLoading();
        });
    },
    filterRealmsByName(event) {
      let realmSearch = event.currentTarget;
      if (realmSearch.value != null) {
        this.filteredRealms = _.filter(this.realms, realm => {
          return realm.name
            .toLowerCase()
            .includes(realmSearch.value.toLowerCase());
        });
      } else {
        this.filteredRealms = this.realms;
      }
    },
    updateRealmData() {
      this.enableLoading();
      api
        .call("patch", "/realms", null)
        .then(({ data }) => {
					Vue.set(this.errors, "realms", ["Realms successfuly updated."])
          this.realms = data.realms;
        })
        .catch(({ response }) => {
          this.errors = response.data.errors;
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

