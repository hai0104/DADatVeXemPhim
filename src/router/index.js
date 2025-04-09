import MuaVe from '@/components/MuaVe.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'muave',
      component: MuaVe,
    },
    
  ],
})

export default router
