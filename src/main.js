import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {Swiper as SwiperClass, Pagination, Navigation} from 'swiper/swiper.esm.js'


Vue.config.productionTip = false

// scss 전역 등록
import './assets/scss/import.scss'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// // import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
SwiperClass.use([Pagination, Navigation])


new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
