import Vue from 'vue'
import Vuex from 'vuex'
import { post } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acessToken: localStorage.getItem('access_token') || '',
    refreshToken: localStorage.getItem('refresh_token') || '',
    user: {}
  },
  getters: {
    isAuth: state => !!state.acessToken
  },
  mutations: {
    login(state, { access, refresh, user }) {
      state.user = user
      state.acessToken = access
      state.refreshToken = refresh
    },
    logout(state) {
      state.acessToken = ''
      state.refreshToken = ''
      state.user = {}
    }
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await post(payload)
      commit('login', {
        access: data.access_token,
        refresh: data.refresh_token,
        user: data.user
      })
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      return data
    },
    logout({ commit }) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      commit('logout')
    }
  },
  modules: {
  }
})
