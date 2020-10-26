import Vue from 'vue'
import Vuex from 'vuex'
import { post, getUser } from '../api'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acessToken: localStorage.getItem('access_token') || '',
    refreshToken: localStorage.getItem('refresh_token') || '',
    userId: localStorage.getItem('user_id'),
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
    },
    setUser(state, user) {
      state.user = user
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
      localStorage.setItem('user_id', data.user.id)
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      return data
    },
    logout({ commit }) {
      localStorage.removeItem('user_id')
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      delete axios.defaults.headers.common['Authorization']
      commit('logout')
    },
    async setUser({ commit, state }) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${state.acessToken}`;
      const { data } = await getUser(state.userId);
      commit('setUser', data)
    }
  },
  modules: {
  }
})
