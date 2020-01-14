// 入口文件来着，主要作用是初始化vue实例并使用需要的插件
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
