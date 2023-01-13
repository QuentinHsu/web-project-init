import { createRouter, createWebHashHistory } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () => import('@/views/index/index.vue'),
    },
  ],
})
export default router
