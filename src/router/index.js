import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chart_0 from '../views/Chart_0.vue'
import Forms from '../views/Forms.vue'
import Images from '../views/Images.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chart/0',
    name: 'Chart',
    component: Chart_0
  },
  {
    path: '/forms/login',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/images',
    name: 'Images',
    component: Images
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
