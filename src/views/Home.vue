<template>
  <div class="common_area home">
    <!-- 상단 -->
    <div class="visual pv-4p">
      <profile></profile>
      <div class="status-box">
        <div><strong>A</strong>님의 진행도</div>
        <progress-bar></progress-bar>
      </div>
    </div>
    <!-- 상단 -->

    <div class="container100 mv-20 ph-4p">

      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
      <router-link to="/notice">공지</router-link>
      <router-link to="/login">로그인</router-link>
      <router-link to="/mypage">마이페이지</router-link>
      <router-link to="/note">메모</router-link>
      <router-link to="/common-ui">공통유아이</router-link>


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


import AutoPer from "./components/swiper/auto-per";
import ProgressBar from "./components/Progress/progress-bar";
import Profile from "./components/layouts/profile";

export default {
  name: 'Home',
  components: {
    Profile,
    ProgressBar,
    AutoPer,
  }
}
</script>
