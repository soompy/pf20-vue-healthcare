<template>
  <div class="container100 home">
    <!-- 상단 -->
    <div class="visual pv-4p">
      <h2 class="fs-18">오늘의 운동</h2>
      <p>오늘 필요한 운동을 간단하고 효율적으로 고릅니다.</p>

      <div class="status-box">
        <div><strong>A</strong>님의 진행도</div>
        <progress-bar></progress-bar>
      </div>
    </div>
    <!-- 상단 -->

    <div class="container100 mv-20 ph-4p">
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
export default {
  name: 'Home',
  components: {
    ProgressBar,
    AutoPer,
  }
}
</script>
