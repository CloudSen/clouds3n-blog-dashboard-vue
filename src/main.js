import Vue from 'vue'
import Fragment from 'vue-fragment'
import ECharts from 'vue-echarts'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)
Vue.component('v-echarts', ECharts)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
