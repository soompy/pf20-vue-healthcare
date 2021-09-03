<template>
  <div class="common_area">
    <div class="profile-box">
      <strong class="profile-subtitle">건강 카드를 확인하세요!</strong>
    </div>

    <card-ticket></card-ticket>
  </div>
</template>

<script>
  import CardTicket from "../../components/note/CardTicket";
  import Profile from "../../components/layouts/profile";


  export default {
    name: 'Card',
    data() {
      return {

      }
    },
    components: {
      CardTicket,
      Profile
    },
  }
</script>

<style lang="scss" scoped>
  .common_area {

  }
</style>
