import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mycart from '../views/mycart.vue'
import womenshoes from '../views/womenshoes.vue'
import newarrivals from '../views/newarrivals.vue'
import men from '../views/men.vue'


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
    {
      path: '/womenshoes',
      name: 'womenshoes',
      component:womenshoes
    },
    {
      path: '/men',
      name: 'men',
      component:men
    }
   
   
  ]
})

export default router
