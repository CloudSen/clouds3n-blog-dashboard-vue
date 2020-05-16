const state = {
  headerMenu: [
    {
      id: 1,
      name: '文章管理',
      routerPath: '/home/article',
      icon: 'home',
      itemOrder: 1,
    },
    {
      id: 2,
      name: '标签管理',
      routerPath: '/home/tag',
      icon: 'book',
      itemOrder: 2,
    },
    {
      id: 3,
      name: '专题管理',
      routerPath: '/home/topic',
      icon: 'wb_incandescent',
      itemOrder: 3,
    },
    {
      id: 4,
      name: '顶部标题管理',
      routerPath: '/home/header',
      icon: 'work',
      itemOrder: 4,
    },
    {
      id: 5,
      name: '侧边栏管理',
      routerPath: '/home/aside',
      icon: 'info',
      itemOrder: 5,
    },
  ],
  progressData: {
    active: false,
  },
}

const getters = {}

const actions = {}

const mutations = {
  saveHeaderMenu ($state, value) {
    const STATE = $state
    STATE.headerMenu = value
  },
  updateProgressData ($state, payload) {
    const STATE = $state
    STATE.progressData = { ...STATE.progressData, ...payload }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
