import TRIGGER_DRAWER from '@/components/header/constants/mutationType'
import { UPDATE_DRAWER_SHOW, CACHE_DRAWER_MENU } from '@/components/aside/constants/mutationType'

const state = {
  show: false,
  drawerMenu: [
    {
      uuid: '1',
      parentId: '-1',
      type: 0,
      name: '主要模块',
      itemOrder: 1,
    },
    {
      uuid: '2',
      parentId: '1',
      type: 2,
      name: '文章管理',
      routerPath: '/home/article',
      icon: 'home',
      itemOrder: 1,
    },
    {
      uuid: '3',
      parentId: '1',
      type: 2,
      name: '标签管理',
      routerPath: '/home/tag',
      icon: 'book',
      itemOrder: 2,
    },
    {
      uuid: '4',
      parentId: '1',
      type: 2,
      name: '专题管理',
      routerPath: '/home/topic',
      icon: 'wb_incandescent',
      itemOrder: 3,
    },
    {
      uuid: '5',
      parentId: '1',
      type: 1,
      name: '顶部标题管理',
      routerPath: '/home/header',
      icon: 'work',
      itemOrder: 4,
    },
    {
      uuid: '6',
      parentId: '1',
      type: 2,
      name: '侧边栏管理',
      routerPath: '/home/aside',
      icon: 'info',
      itemOrder: 5,
    },
    {
      uuid: '7',
      parentId: '-1',
      type: 0,
      name: '其他',
      itemOrder: 2,
    },
    {
      uuid: '8',
      parentId: '7',
      type: 2,
      name: '时间轴管理',
      routerPath: '/home/time-line',
      icon: 'timeline',
      itemOrder: 1,
    },
    {
      uuid: '9',
      parentId: '7',
      type: 2,
      name: '关于我',
      routerPath: '/home/about-me',
      icon: 'timeline',
      itemOrder: 2,
    },
  ],
}

const getters = {}

const actions = {}

const mutations = {
  [TRIGGER_DRAWER] ($state) {
    const STATE = $state
    STATE.show = true
  },
  [UPDATE_DRAWER_SHOW] ($state, value) {
    const STATE = $state
    STATE.show = value
  },
  [CACHE_DRAWER_MENU] ($state, value) {
    const STATE = $state
    STATE.drawerMenu = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
