import MuaVe from '@/components/MuaVe.vue'
import SuKien from '@/views/SuKien.vue'
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
      path: '/su-kien',
      name: 'su-kien',
      component: SuKien,
    },
    
  ],
})

export default router
