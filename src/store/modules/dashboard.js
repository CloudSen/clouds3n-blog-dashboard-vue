const state = {
  loadingMonitorData: false,
  monitorCardList: [
    {
      type: 'article',
      name: '文章总数',
      count: 0,
      url: '/home/article',
      color: 'light-blue lighten-1',
      textColor: 'white--text',
    },
    {
      type: 'monthArticle',
      name: '本月文章数',
      count: 0,
      url: '/home/article',
      color: 'brown lighten-1',
      textColor: 'white--text',
    },
    {
      type: 'yearArticle',
      name: '今年文章数',
      count: 0,
      url: '/home/article',
      color: 'black',
      textColor: 'white--text',
    },
    {
      type: 'tag',
      name: '标签总数',
      count: 0,
      url: '/home/tag',
      color: 'green darken-3',
      textColor: 'white--text',
    },
    {
      type: 'topic',
      name: '专题总数',
      count: 0,
      url: '/home/topic',
      color: 'orange darken-3',
      textColor: 'white--text',
    },
    {
      type: 'comment',
      name: '评论数',
      count: 0,
      url: '',
      color: 'grey darken-2',
      textColor: 'white--text',
    },
  ],
  loadingTagPie: false,
  tagPieData: [],
}

const getters = {}

const actions = {}

const mutations = {
  updateMonitorCardList ($state, payload) {
    const STATE = $state
    const foundIndex = STATE.monitorCardList.findIndex((monitorCard) => monitorCard.type === payload.type)
    STATE.monitorCardList[foundIndex].count = payload.count
  },
  updateTagPieData ($state, payload) {
    const STATE = $state
    STATE.tagPieData = payload
  },
  updateLoadingTagPie ($state, payload) {
    const STATE = $state
    STATE.loadingTagPie = payload
  },
  updateLoadingMonitorData ($state, payload) {
    const STATE = $state
    STATE.loadingMonitorData = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
