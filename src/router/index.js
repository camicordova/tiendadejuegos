import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../views/Products.vue'
import Total from '../views/Sales.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/total',
    name: 'Total',
    component: Total
  },
  {
    path: '/busquedas',
    name: 'Busquedas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Busqueda.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
