<template>
  <div class="common_area">
    <!-- 상단 -->
    <div class="visual pv-4p">
      <profile></profile>
    </div>
    <!-- 상단 -->

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
