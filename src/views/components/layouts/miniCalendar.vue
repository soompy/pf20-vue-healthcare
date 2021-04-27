<template>
  <div class="flex-list-scrollX-wrap">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">12</span>
          <p class="date">금</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item active">
          <span class="day">13</span>
          <p class="date">토</p>
        </div>
      </swiper-slide>


      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">14</span>
          <p class="date">일</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">15</span>
          <p class="date">월</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">16</span>
          <p class="date">화</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">17</span>
          <p class="date">수</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">18</span>
          <p class="date">목</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">19</span>
          <p class="date">금</p>
        </div>
      </swiper-slide>

     <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">20</span>
          <p class="date">토</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">21</span>
          <p class="date">일</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">22</span>
          <p class="date">월</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">23</span>
          <p class="date">화</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">24</span>
          <p class="date">수</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">25</span>
          <p class="date">목</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">26</span>
          <p class="date">금</p>
        </div>
      </swiper-slide>

      <swiper-slide class="slide-list-item" :class="slideWidthClass">
        <div class="list-item">
          <span class="day">27</span>
          <p class="date">토</p>
        </div>
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
      }
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
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    console.log("moment::", moment().format('YYYY-MM-DD HH:mm:ss'));
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
  }
</style>
