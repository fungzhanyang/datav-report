import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from './plugins/element.js'
import ECharts from 'echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts

Vue.use(element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
