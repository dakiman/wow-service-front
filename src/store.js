import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  character: {}
}

const mutations = {
  setCharacter(state, character) {
    state.character = character;
  },
}

const getters = {
  character: state => state.character
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
