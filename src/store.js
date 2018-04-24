import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  character: {},
  loading: false,
}

const mutations = {
  unsetCharacter: state => state.character = {},
  setCharacter: (state, character) => state.character = character,
  enableLoading: (state) => state.loading = true,
  disableLoading: (state) => state.loading = false,
}

const getters = {
  character: state => state.character,
  loading: state => state.loading
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
