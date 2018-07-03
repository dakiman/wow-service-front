<template>
	<div class="about">
		<div class="charContainer flexContainer">
			<div class="singleChar flexContainer" v-for="character in this.savedCharacters" :key="character.id">
				<figure class="avatar">
					<img :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail" alt="" height="84px" width="84px">
				</figure>
				<div class="dataDiv">
					<span class="">{{ character.name }}, Level {{ character.level }} {{ raceName(character) }}
						<span :style="{ color : classColor(character) }">{{ className(character) }}</span>
						<br>
						<button :class="{ 'is-loading' : loading }" :data-id=character.id class="delete-btn button is-primary sharpen m-t-15" @click="deleteCharacter($event)">Remove Character</button>
					</span>
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

			let button = event.currentTarget
			let id = button.dataset['id']
			this.enableLoading()
			api
				.call('delete', '/character/' + id)
				.then(({data}) => {
					this.removeCharacter(id)
				})
				.catch(response => {
					console.log(response);
				})
				.finally(() => {
					this.disableLoading()
				})
		},

  },
  computed: {
    ...mapGetters(["savedCharacters", "loading"])
  }
};
</script>

<style scoped>
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
  height: 300px;
  width: 350px;
  flex-direction: row;
}
.singleChar img {

}
</style>

