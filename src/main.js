import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import PerfectScrollbar from 'vue2-perfect-scrollbar'


Vue.config.productionTip = false

// scss 전역 등록
import './assets/scss/import.scss'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// perfect scrollbar
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

// v-calendar
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

// vue awesome swiper
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// perfect scrollbar
Vue.use(PerfectScrollbar)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')



Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
