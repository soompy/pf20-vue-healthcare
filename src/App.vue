<template>
  <div id="app">
    <div id="nav">
      <a class="dp-ib">
        <i class="ic_list_normal black"></i>
      </a>
      <Menu></Menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Menu from "./views/components/gnb/Menu";

  export default {
    components: {
      Menu,
    }
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
