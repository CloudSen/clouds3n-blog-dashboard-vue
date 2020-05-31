import Vue from 'vue'
import Fragment from 'vue-fragment'
import ECharts from 'vue-echarts'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/axis'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/dataset'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)
Vue.component('v-echarts', ECharts)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
