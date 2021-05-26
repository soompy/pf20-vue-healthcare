<template>
  <div class="common_area home">
    <!-- 상단 -->
    <div class="visual pv-4p">
      <profile></profile>
      <div class="status-box">
        <div class="nickname-info"><strong>A</strong>님의 진행도</div>
      </div>
    </div>
    <!-- 상단 -->

    <mini-calendar @selectDays="selDays"></mini-calendar>

    <!-- 진척도 콘텐츠 -->
    <auto-per></auto-per>

    <square-list :data="squareArr"></square-list>
  </div>
</template>

<script>
// @ is an alias to /src

import AutoPer from "../../components/swiper/auto-per";
import Profile from "../../components/layouts/profile";
import SquareList from '../../components/layouts/squareList.vue';
import MiniCalendar from '../../components/layouts/miniCalendar.vue';

export default {
  name: 'Home',
  components: {
    Profile,
    AutoPer,
    SquareList,
    MiniCalendar,
  },
  data () {
    return {
      squareArr: []
    }
  },
  methods: {
    selDays (day) {
      console.log('manin::selDays::', day)
      this.apiCall(day).then(res => {
        console.log('apicall::then::', res)
        this.squareArr = res
      })
    },
    apiCall(day){
      console.log('apiCall::', day)
      return new Promise((resolve, reject) => {
        setTimeout(_=>{
          resolve([
            {
              iconBox: 'title-icon heart-rate',
              icon: 'ic_like ss-pink',
              title: 'Heart rete',
              subtitle: (new Date(`2021/${day.month}/${day.day}`)).toLocaleString(),
              figures: Math.floor(Math.random(100) * 100),
              unit: 'bpm'
            },
             {
              iconBox: 'title-icon water',
              icon: 'ic_person ss-blue',
              title: 'Water',
              subtitle: (new Date(`2021/${day.month}/${day.day}`)).toLocaleString(),
              figures: Math.floor(Math.random(100) * 100),
              unit: 'ml'
            },
             {
              iconBox: 'title-icon sleep',
              icon: 'ic_time medium-grey',
              title: 'Sleep',
              subtitle: (new Date(`2021/${day.month}/${day.day}`)).toLocaleString(),
              figures:  Math.floor(Math.random(100) * 100),
              unit: 'Hours'
            },
             {
              iconBox: 'title-icon weight',
              icon: 'ic_food white',
              title: 'Weight',
              subtitle: (new Date(`2021/${day.month}/${day.day}`)).toLocaleString(),
              figures:  Math.floor(Math.random(100) * 100),
              unit: 'kg'
            },
          ])
        }, 2000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .visual {
        width: 100%;
        padding: 20px 4vw;
        .nickname-info {
          text-align: left;
          font-size: 14px;
          margin-top: 20px;
        }
    }
</style>
