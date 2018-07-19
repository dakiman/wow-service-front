<template>
	<div class="about">
		<div class="charContainer flexContainer">
			<div class="singleChar flexContainer" v-for="character in this.savedCharacters" :key="character.id">
				<figure class="avatar">
					<img :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail" alt="" width="100%">
				</figure>
				<div class="dataDiv">
					<span id="charInfo">
						<router-link :to="{name : 'dashboard', params: {name: character.name, realm: character.realm} }">{{ character.name }}, Level {{ character.level }} {{ raceName(character) }}</router-link>
					</span>
					<br>
					<span :style="{ color : classColor(character) }">{{ className(character) }}</span>
					<br>
					<button :class="{ 'is-loading' : loading }" :data-id=character.id class="delete-btn button is-primary sharpen m-t-15" @click="deleteCharacter($event)">Remove Character</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["removeCharacter", "enableLoading", "disableLoading"]),
    className(character) {
      return info.getClass(character.class);
    },
    raceName(character) {
      return info.getRace(character.race);
    },
    classColor(character) {
      return info.getClassColor(character.class);
    },
    deleteCharacter(event) {
      let button = event.currentTarget;
      let id = button.dataset["id"];
      this.enableLoading();
      api
        .call("delete", "/character/" + id)
        .then(({ data }) => {
          this.removeCharacter(id);
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
    ...mapGetters(["savedCharacters", "loading"])
  }
};
</script>

<style lang="scss" scoped>
.flexContainer {
  display: flex;
}
.charContainer {
  flex-direction: column;
  justify-content: flex-start;
}
.singleChar {
  margin: 25px;
  padding: 25px;
  background: rgba(1, 1, 1, 0.5);
  height: 150px;
  width: 350px;
  display: flex;
}
.avatar {
  align-self: flex-start;
  padding-top: 3%;
}
.avatar img {
  border-radius: 50px;
}
.dataDiv {
  width: 75%;
}
#charInfo {
  font-size: 14px;
}
a:hover {
  color: white;
  text-decoration: underline;
}
</style>

