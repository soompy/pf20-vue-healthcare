<template>
  <div class="common_area home">
    <!-- 상단 -->
    <div class="visual pv-4p">
      <profile></profile>
      <div class="status-box">
        <div class="nickname-info"><strong>A</strong>님의 진행도</div>
        <!-- 진척도 콘텐츠 -->
        <auto-per></auto-per>
        <!-- 진척도 콘텐츠 -->
      </div>
    </div>
    <!-- 상단 -->

    <mini-calendar></mini-calendar>

    <square-list></square-list>
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
