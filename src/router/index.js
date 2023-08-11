import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mycart from '../views/mycart.vue'
import newarrivals from '../views/newarrivals.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mycart',
      name: 'mycart',
      component: mycart
    },
    {
      path: '/newarrivals',
      name: 'newarrivals',
      component: newarrivals
    },
   
  ]
})

export default router
