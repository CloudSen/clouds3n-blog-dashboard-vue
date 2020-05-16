import Vue from 'vue'
import Vuex from 'vuex'
import header from '@/store/modules/header'
import navDrawer from '@/store/modules/navDrawer'
import dashboard from '@/store/modules/dashboard'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    header,
    navDrawer,
    dashboard,
  },
})
