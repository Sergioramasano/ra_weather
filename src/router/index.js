import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Cities from '../views/Cities.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cities',
    name: 'cities',
    component: Cities
  },
  {
    path: '/cities/:cityId',
    name: 'city',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
