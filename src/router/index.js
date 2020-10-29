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
    component: () => import('../views/Auth')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home'),
    children: [
      {
        path: 'traffic',
        component: () => import('../components/TableTraffic')
      },
      {
        path: 'segments',
        component: () => import('../components/TableSegments')
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuth) {
        next('auth')
      } else if (!from.name) {
        store.dispatch('setUser')
        next()
      } else {
        next()
      }
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
