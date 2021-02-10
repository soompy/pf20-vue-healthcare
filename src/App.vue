<template>
  <div id="app">
    <div class="nav">
      <router-link to="/nav"><span class="hamburger-menu"><i class="ic_list_normal wh-30 dark-grey"></i></span></router-link>
      <router-link to="/"><h1 class="logo"><i class="ic_plane wh-30 ss-blue mr-06"></i>날다</h1></router-link>
      <!-- vue router  https://router.vuejs.org/kr/guide/#javascript -->
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
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    a {
      display: block;
      padding: 10px;
    }
  }
  @import '/assets/css/color.css';
  @import '/assets/css/common.css';
  @import '/assets/css/home.css';
  @import '/assets/css/variable.css';
  @import '/assets/css/import.css';
</style>
