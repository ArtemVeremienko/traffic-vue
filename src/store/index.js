import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, token) {
      state.accessToken = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
