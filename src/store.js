import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  character: {},
  savedCharacters: [],
  loading: false
}

const mutations = {
  unsetCharacter: state => state.character = {},
  setCharacter: (state, character) => state.character = character,
  enableLoading: state => state.loading = true,
  disableLoading: state => state.loading = false,
  addSavedCharacter: (state, character) => state.savedCharacters.push(character),
  removeCharacter: (state, id) => {
    _.remove(state.savedCharacters, character => {
      return character.id == id
    })
  }
}

const getters = {
  savedCharacters: state => state.savedCharacters,
  character: state => state.character,
  loading: state => state.loading
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
