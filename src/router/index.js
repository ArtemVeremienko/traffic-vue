import Vue from 'vue'
import VueRouter from 'vue-router';
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuth) next('/home')
      else next('auth')
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuth) {
        next('auth')
      } else {
        store.dispatch('setUser')
        next()
      }

    }
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
