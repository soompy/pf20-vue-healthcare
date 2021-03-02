<template>
  <div id="app" class="jb-default">
    <div class="nav">
      <router-link to="/nav"><span class="hamburger-menu"><i class="ic_list_normal wh-30 dark-grey"></i></span></router-link>
      <router-link to="/"><h1 class="logo"><i class="ic_level_filled wh-30 medium-grey mr-06"></i>Heal Card</h1></router-link>
      <!-- vue router  https://router.vuejs.org/kr/guide/#javascript -->
      <router-link to="/mypage" class="mypage"><h1 class="logo"><i class="ic_more_2 wh-30 ss-blue mr-06"></i></h1></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {

    },
    methods: {
      clickItem (item) {
        console.log('PracticeHomeList::clickItem::', item)
        this.$emit('clickItem', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    .nav {
      background: #F57F17;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
      .logo {
        color: #555;
      }
    }
    a {
      display: block;
      padding: 10px;
      &.mypage {
        margin-left: auto;
      }
    }
  }
</style>
