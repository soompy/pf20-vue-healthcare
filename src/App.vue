<template>
  <div id="app">
    <div id="nav">
      <div class="account">
        <span class="profile"><img src="" alt="" class="wh-20"></span>
        <div class="profile-info">
          <p class="name">수리</p>
          <p class="id">계정영역</p>
        </div>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Mypage</router-link>
      <router-link to="/about">Grape</router-link>
      <router-link to="/about">Note</router-link>
      <router-link to="/about">Community</router-link>
      <router-link to="/about">Notice</router-link>
    </div>
    <router-view/>
  </div>
</template>

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

  .account {
    display: flex;
    padding: 20px 16px;
    border-bottom: 1px solid #ccc;
    .profile {
      width: 50px;
      height: 50px;
      background: #ccc;
    }
  }

  @import '/assets/css/color.css';
  @import '/assets/css/common.css';
  @import '/assets/css/home.css';
  @import '/assets/css/variable.css';
  @import '/assets/css/import.css';
</style>
