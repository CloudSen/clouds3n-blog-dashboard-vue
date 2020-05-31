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
  loadingArticleFreqLine: false,
  articleFreqLineData: [['2000-06-05', 116], ['2000-06-06', 129], ['2000-06-07', 135],
    ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85], ['2000-06-11', 73],
    ['2000-06-12', 68], ['2000-06-13', 92], ['2000-06-14', 130], ['2000-06-15', 245],
    ['2000-06-16', 139], ['2000-06-17', 115], ['2000-06-18', 111],
    ['2000-06-19', 309], ['2000-06-20', 206], ['2000-06-21', 137], ['2000-06-22', 128],
    ['2000-06-23', 85], ['2000-06-24', 94], ['2000-06-25', 71], ['2000-06-26', 106],
    ['2000-06-27', 84], ['2000-06-28', 93], ['2000-06-29', 85], ['2000-06-30', 73],
    ['2000-07-01', 83], ['2000-07-02', 125], ['2000-07-03', 107],
    ['2000-07-04', 82], ['2000-07-05', 44], ['2000-07-06', 72], ['2000-07-07', 106],
    ['2000-07-08', 107], ['2000-07-09', 66], ['2000-07-10', 91], ['2000-07-11', 92], ['2000-07-12', 113], ['2000-07-13', 107], ['2000-07-14', 131], ['2000-07-15', 111], ['2000-07-16', 64],
    ['2000-07-17', 69], ['2000-07-18', 88], ['2000-07-19', 77], ['2000-07-20', 83],
    ['2000-07-21', 111], ['2000-07-22', 57], ['2000-07-23', 55], ['2000-07-24', 60]],
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
  updateArticleFreqLineData ($state, payload) {
    const STATE = $state
    STATE.articleFreqLineData = payload
  },
  updateLoadingTagPie ($state, payload) {
    const STATE = $state
    STATE.loadingTagPie = payload
  },
  updateLoadingMonitorData ($state, payload) {
    const STATE = $state
    STATE.loadingMonitorData = payload
  },
  updateLoadingArticleFreqLine ($state, payload) {
    const STATE = $state
    STATE.loadingArticleFreqLine = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
