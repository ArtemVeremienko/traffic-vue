import Vue from 'vue'
import Vuex from 'vuex'
import { authorization, registration } from '../api'

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
    setUser(state, payload) {
      state.user = payload
    },
    setTokens(state, { access, refresh }) {
      state.acessToken = access
      state.refreshToken = refresh
    },
    clearData(state) {
      state.acessToken = ''
      state.refreshToken = ''
      state.user = {}
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        authorization(user)
          .then(({ data }) => {
            commit("setUser", data.user);
            commit('setTokens', { access: data.access_token, refresh: data.refresh_token })
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          });
      })
    },
    register({ commit }, data) {
      return new Promise((resolve, reject) => {
        registration(data)
          .then(({ data }) => {
            commit("setUser", data.user);
            commit('setTokens', { access: data.access_token, refresh: data.refresh_token })
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            resolve(data)
          })
          .catch((err) => reject(err));
      })
    },
    logout({ commit }) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      commit('clearData')
    }
  },
  modules: {
  }
})
