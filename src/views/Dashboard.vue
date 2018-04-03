<template>
  <div class="dashboard">
    <div class="container">
      <div class="columns is-8">
        <div class="column is-one-third">
          <div class="field">
            <label class="label">Character Name</label>
            <input class="input is-small sharpen" type="text" placeholder="Character" v-model="name">
          </div>
          <div class="field">
            <label class="label ">Realm</label>
            <input class="input is-small sharpen" type="text" placeholder="Realm" v-model="realm">
          </div>
          <div class="field">
            <button v-bind:class="{ 'is-loading': loading }" class="button is-primary sharpen" @click="getChar">Search</button>
          </div>
        </div>
        <div class="column has-text-left" v-if="character.name">
          <span class="">{{ character.name }} , Level {{ character.level }} {{ character.race }} {{ character.className }}</span>
          <br>
          <img :src="'https://render-eu.worldofwarcraft.com/character/' + character.thumbnail" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      name: 'Dakis',
      realm: 'the maelstrom',
      character: {
        name: '',
        faction: '',
        level: '',
        race: '',
        className: '',
        battlegroup: '',
        thumbnail: ''
      }
    }
  },
  methods: {
    getChar () {
      this.loading = true
      api
        .callWow(url.getCharacter(this.realm, this.name))
        .then(({ data }) => {
          console.log(data)
          this.character.name = data.name
          this.character.faction = data.faction
          this.character.level = data.level
          this.character.race = info.getRace(data.race)
          this.character.className = info.getClass(data.class)
          this.character.battlegroup = data.battlegroup
          this.character.thumbnail = data.thumbnail
          this.loading = false
        })
        .catch(response => { console.log(response); this.loading = false})
    }
  }
}
</script>

<style scoped>
.info-container {
  margin-top: 20px;
}
.button {
  width: 100%;
}
</style>
