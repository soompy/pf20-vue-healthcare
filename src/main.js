import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false

// scss 전역 등록
import './assets/scss/import.scss'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
