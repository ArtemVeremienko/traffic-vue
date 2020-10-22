import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      console.log(state, payload)
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
