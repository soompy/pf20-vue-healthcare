<template>
  <div class="common_area">
    <div class="profile-box">
      <h2 class="profile-subtitle">건강 카드를 확인하세요!</h2>
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
    padding: 30px 0;
  }
  .profile-subtitle {
    padding-bottom: 16px;
  }
</style>
