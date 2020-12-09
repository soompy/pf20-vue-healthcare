import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// scss 전역 등록
import './assets/scss/import.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
