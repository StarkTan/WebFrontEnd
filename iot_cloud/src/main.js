// 入口文件来着，主要作用是初始化vue实例并使用需要的插件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入MockJs
// eslint-disable-next-line no-unused-vars
import Mock from '@/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
