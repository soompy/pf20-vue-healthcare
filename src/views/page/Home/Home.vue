<template>
  <div class="common_area home">
    <!-- 상단 -->
    <div class="visual pv-4p">
      <profile></profile>
      <div class="status-box">
        <div class="nickname-info"><strong>A</strong>님의 진행도</div>
        <progress-bar></progress-bar>
      </div>
    </div>
    <!-- 상단 -->

    <mini-calendar></mini-calendar>

    <square-list></square-list>

    <div class="container100 mv-20 ph-4p">

      <router-link to="/">홈</router-link> <br>
      <router-link to="/about">소개</router-link> <br>
      <router-link to="/notice">공지</router-link> <br>
      <router-link to="/login">로그인</router-link> <br>
      <router-link to="/mypage">마이페이지</router-link> <br>
      <router-link to="/note">메모</router-link> <br>
      <router-link to="/planner">플래너</router-link> <br>
      <router-link to="/common-ui">공통유아이</router-link> <br>


      <!-- 진척도 콘텐츠 -->
      <auto-per></auto-per>
      <!-- 진척도 콘텐츠 -->

      <!-- 투데이 미션 -->
      <h3 class="ta-l">Today</h3>
    </div>


    <!-- 투데이 미션 -->

  </div>
</template>

<script>
// @ is an alias to /src


import AutoPer from "../../components/swiper/auto-per";
import ProgressBar from "../../components/graph/progress-bar";
import Profile from "../../components/layouts/profile";
import SquareList from '../../components/layouts/squareList.vue';
import MiniCalendar from '../../components/layouts/miniCalendar.vue';

export default {
  name: 'Home',
  components: {
    Profile,
    ProgressBar,
    AutoPer,
    SquareList,
    MiniCalendar,
  }
}
</script>

<style lang="scss" scoped>
  .visual {
        width: 100%;
        padding: 5vw 4vw;
        .nickname-info {
          text-align: left;
          font-size: 14px;
          margin-top: 20px;
        }
    }
</style>
