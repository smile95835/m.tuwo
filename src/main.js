import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
// 传值中间件
Vue.prototype.$pubsub = new Vue();
// 滚动全局组件
import AppContent from './components/public/AppContent.vue'
Vue.component('app-content', AppContent);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
