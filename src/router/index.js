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
      {
        path: 'article',
        name: 'articleMgmt',
        title: '文章管理',
        component: () => import('@/views/ArticleMgmt'),
      },
    ],
  },
  {
    path: '*',
    name: 'not_found_404',
    title: 'not_found_404',
    redirect: '/',
  },
]

const router = new VueRouter({
  routes,
})

export default router
