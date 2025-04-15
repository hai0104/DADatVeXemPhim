import MuaVe from '@/components/MuaVe.vue'
import UuDai from '@/components/UuDai.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'muave',
      component: MuaVe,
    },
    {
      path: '/uu-dai',
      name: 'uu-dai',
      component: UuDai,
    },
    
  ],
})

export default router
