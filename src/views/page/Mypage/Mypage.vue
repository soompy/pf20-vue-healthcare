<template>
  <div class="common_area">
    <account-box></account-box>

    <div class="report-wrap">
      <ul class="report-box">
        <li class="report-list"><span class="record"><strong>5</strong>시간</span>활동시간</li>
        <li class="report-list"><span class="record"><strong>1.4</strong>km</span>활동량</li>
        <li class="report-list"><span class="record"><strong>300</strong>kcal</span>칼로리</li>
        <li class="report-list"><span class="record"><strong>1.6</strong>L</span>수분섭취</li>
      </ul>

      <div class="weekly-check">
        <ul class="check-list-box">
          <li class="check-list"><span class="record"><strong>120 &#x002F; 90</strong>mmHg</span>혈압</li>
          <li class="check-list"><span class="record"><strong>52.1</strong>kg</span>체중</li>
        </ul>
      </div>
    </div>


    <HealthRecord></HealthRecord>

<!--    체중관리그래프와 BMI-->


<!--    리마인더-->

  </div>
</template>

<script>

  import AccountBox from "../../components/layouts/accountBox";
  import HealthRecord from "../../components/swiper/health-record";
  export default {
    name: 'Mypage',
    data() {
      return {

      }
    },
    components: {
      HealthRecord,
      AccountBox
    }
  }
</script>

<style lang="scss" scoped>
  .report-wrap {
    padding: 20px 4vw;
  }
  .report-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    .report-list {
      flex: 1;
    }
  }

  .record {
    display: block;
    strong {
      font-size: 18px;
      color: #3f51b5;
    }
  }

  .weekly-check {
    padding: 8px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    border: 2px solid #FBC02D;
    background: #FFFFFF;
    .check-list-box {
      display: flex;
      align-items: center;
      justify-content: center;
      .check-list {
        padding: 0 4vw;
      }
    }
  }

</style>
