<template>
	<div class="singleRealm">
		<h1>This is a single realm {{$route.params.slug | sanitize}}</h1>
		<!-- {{realm}} -->
		<br>
		Type: {{realm.type | sanitize}}
		<br>
		Population: {{ realm.population | capitalize}}
		<br>
		Last updated: {{updatedAt}} mins ago
	</div>
</template>

<script>
export default {
  data() {
    return {
      realm: {}
    };
  },
  mounted() {
    this.init();
	},
	filters: {
		sanitize(string) {
			if (!string) return ''
			string = string.toString()
			string = _.upperFirst(string)
			string = string.replace('-', ' ')
			string = string.split(' ')
			for(i = 0; i < string.length; i++) {
				string[i] = _.upperFirst(string[i])
			}
			string = string.join(" ")
			return _.upperFirst(string);
		},
		capitalize(string) {
			return _.upperFirst(_.lowerCase(string))
		}
	},
  methods: {
    init() {
      api
        .call("get", "/realms/" + this.$route.params.slug)
        .then(({ data }) => {
					this.realm = data.realm[0];
          console.log(data);
        })
        .catch(response => {
          console.log(response);
        })
        .finally(() => {});
    }
	},
	computed: {
		updatedAt() {
			let currentTime = new Date(this.realm.currentTime.date)
			let updatedTime = new Date(this.realm.updated_at)
			return Math.floor((currentTime - updatedTime) / 1000 / 60)
		}
	}
};
</script>

