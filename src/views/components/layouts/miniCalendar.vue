<template>
  <div class="flex-list-scrollX-wrap">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="slide-list-item" :class="slideWidthClass" v-for="days in weeks" :key="days.day">
        <div class="list-item" :class="{'active': days.isToday, 'select-date': days.day === selectDate.day}" @click="clickDate(days)">
          <span class="day">{{days.day}}</span>          
          <p class="date">{{days.dayofTheweek}}</p>
        </div>
        {{apiData}}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/**
 * https://momentjs.com/
 * 1. 범위는 현재주 기준 +- 1주 로 한다. 총 3주
 * 2. 현재주가 처음 화면에 나타나야 한다. 
 * 3. 현재날짜 표시 
 * 4. 클릭시 선택한 날짜 표시
 * 5. 현재 날짜 고정 으로 작업 (스와이프 해도 현재는 날짜가 늘어나지 않음)
 */
import moment from 'moment';
export default {
  name: "MiniCalendar",
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      weeks: [],
      today: moment(),
      weeksName: {
        Sunday: '일',
        Monday: '월',
        Tuesday: '화',
        Wednesday: '수',
        Thursday: '목',
        Friday: '금',
        Saturday: '토',
      },
      selectDate: {},
      apiData: {}     
    };
  },
  components: {},
  props: {
    slideWidth: {
      type: Number || String,
      default: 12
    }
  },
  computed: {
    slideWidthClass() {
      return `list-scroll-${this.slideWidth}`;
    },    
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    console.log("moment::", moment().format('YYYY-MM-DD HH:mm:ss'));
    // {
    //   day: 1,
    //   isToday: false,
    //   month: 1,
    //   DayofTheweek: '월'
    // }
    const days = moment(moment().day(0)).add(-7, 'days')
    // this.weeks = Array.from({length: 14}, (v,i)=> moment(days).add(i, 'days')).map(v => {
    //   return {
    //     day: v.date(),
    //     DayofTheweek: this.weeksName[v.format('dddd')]
    //   }
    // })
    // this.weeks = Array.from({length: 14}, (v,i)=> i).map(v => moment(days).add(v, 'days').format('YYYY/MM/DD'))
    this.weeks = Array.from({length: 14}).map((v, i) => {
      const date = moment(days).add(i, 'days')
      return {
        day: date.date(),
        isToday: date.format('YYYY/MM/DD') === this.today.format('YYYY/MM/DD'),
        month: date.month() + 1,
        dayofTheweek: this.weeksName[date.format('dddd')]
      }
    })
    console.log(this.weeks)
  },
  methods: {
    clickDate (days) {
      console.log('click', days)
      this.selectDate = days
      this.$emit('selectDays', days)
    },
    apiCall (days) {
      setTimeout(_ => {
        // api 호출 했다 생각하고 리턴
        this.apiData = {
          18: {
            test:1
          }
        }[days.day]
         console.log('api::', this.apiData, days)
      }, 1000)
    }
  }
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  .list-item {
    border-radius: 6px;
    padding: 8px 0;
    .day {
      display: inline-block;
      width: 100%;
      font-size: 12px;
      padding-bottom: 4px;
      margin-bottom: 4px;
      border-bottom: 1px solid #ccc;
    }
    .date {
      font-size: 14px;
      font-weight: 600;
      font-family: 'Noto Sans KR', sans-serif;
      padding-top: 2px;
    }
    &.active {
      background: #dddddd;
      .day {
        border-bottom: 1px solid #FFFFFF;
      }
    }
    &.select-date {
      background: pink;
    }
  }
</style>
