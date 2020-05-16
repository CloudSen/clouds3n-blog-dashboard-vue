import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    title: 'welcome',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    title: 'home',
    component: Home,
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        title: '看板',
        component: () => import('@/views/Dashboard'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
