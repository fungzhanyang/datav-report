import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from './plugins/element.js'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/vcharts'
import './style/index.css'

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts

Vue.use(element)
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
