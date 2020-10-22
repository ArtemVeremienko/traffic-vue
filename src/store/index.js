import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authURL: 'https://seo-kit.ru/api/v1/auth',
    regURL: 'https://seo-kit.ru/api/v1/user',
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    user: {}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
