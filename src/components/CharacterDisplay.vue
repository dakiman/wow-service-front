<template>
	<div class="characterDisplay">
		<div class="column ">
			<div class="box m-t-5 is-dark">
				<figure v-if="character.name" figure class="avatar">
					<img :class="[character.faction ? 'horde-border' : 'alliance-border']" :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail">
				</figure>
				<div v-if="!character.name">
					<div class="field">
						<div class="control">
							<input class="input is-large sharpen" placeholder="Character Name" autofocus="" v-model="name">
						</div>
					</div>
					<div class="field">
						<div class="control">
							<input class="input is-large sharpen" placeholder="" v-model="realm">
						</div>
					</div>
					<button class="button is-block is-primary sharpen is-large is-fullwidth" :class="{ 'is-loading' : loading }" @click="getChar">Search</button>
				</div>
				<div v-else>
					<span class="">{{ character.name }}, Level {{ character.level }} {{ raceName }}
						<span :style="{ color : classColor }">{{ className }}</span>
					</span>
					<br>
					<button class="button is-primary sharpen m-t-25 light-shadow" @click="clearChar">Search chararcter</button>
					<button class="button is-primary sharpen m-t-25 m-l-15" @click="addChar" :class="{ 'is-loading' : loading }" v-if="savedCharacterCheck">+ Add Character</button>
					<button v-else class="button sharpen m-t-25 m-l-15" disabled> Character added!</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CharacterDisplay",
  data() {
    return {
      loading: false,
      name: "Sernaos",
      realm: "the maelstrom"
    };
  },
  created() {
    if (this.$route.params.name && this.$route.params.realm) {
			this.unsetCharacter()
      this.name = this.$route.params.name;
      this.realm = this.$route.params.realm;
      this.getChar();
    }
  },
  methods: {
    ...mapMutations(["setCharacter", "unsetCharacter", "addSavedCharacter"]),
    addChar() {
      this.loading = true;
      api
        .call("post", "/character", this.normalizedData)
        .then(({ data }) => {
          console.log(data);
          this.addSavedCharacter(data);
        })
        .catch(response => {
          console.log(response);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getChar() {
      this.loading = true;
      api
        .callWow(url.getCharacter(this.realm, this.name))
        .then(({ data }) => {
          console.log(data);
          this.setCharacter(data);
          this.loading = false;
        })
        .catch(response => {
          this.unsetCharacter();
          console.log(response);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    clearChar() {
      this.$store.commit("unsetCharacter");
      this.$router.push("/dashboard");
    }
  },
  computed: {
    ...mapGetters(["character", "savedCharacters"]),
    //make name and realm uppercase first letter for better consistency
    normalizedData() {
      let realm = this.realm.split(" ");
      for (i = 0; i < realm.length; i++) {
        realm[i] = _.upperFirst(realm[i]);
      }
      realm = realm.join(" ");
      return {
        name: _.upperFirst(_.lowerCase(this.name)),
        realm: realm
      };
    },
    className() {
      return info.getClass(this.character.class);
    },
    raceName() {
      return info.getRace(this.character.race);
    },
    classColor() {
      return info.getClassColor(this.character.class);
    },
    savedCharacterCheck() {
      return !_.find(this.savedCharacters, this.normalizedData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
}
.horde-border {
  -webkit-box-shadow: 0 2px 3px rgba(255, 0, 0, 0.664),
    0 0 0 1px rgba(255, 0, 0, 0.664);
  box-shadow: 0 2px 3px rgba(255, 0, 0, 0.664), 0 0 0 1px rgba(255, 0, 0, 0.555);
}
.alliance-border {
  -webkit-box-shadow: 0 2px 3px rgba(0, 17, 255, 0.664),
    0 0 0 1px rgba(0, 17, 255, 0.664);
  box-shadow: 0 2px 3px rgba(0, 17, 255, 0.664),
    0 0 0 1px rgba(0, 17, 255, 0.664);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

:disabled {
  background-color: lightgray;
  border: 1.5px solid gray;
}

:disabled::before {
  content: "✔\00a0";
}
</style>
