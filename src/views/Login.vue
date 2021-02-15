<template>
  <div class="common_area">
    <div class="login-box ph-4p">
      <h2 class="signin-title">Sign in <br> Heal Card!</h2>
      <p class="signin-subtitle">Heal Card에 로그인해주세요.</p>
    
      <div class="form-field-line">
          <input type="text" class="field-text" required id="field-text1"/>
          <label class="field-label" for="field-text1">{{ label }}</label>
          <span class="field-line"></span>      
      </div>

      <div class="form-field-line mt-16">
          <input type="text" class="field-text" required id="field-text1"/>
          <label class="field-label" for="field-text1">{{ labelPw }}</label>
          <span class="field-line"></span>        
      </div>
    </div>

    <div class="field-button-box">
        <button class="button-round">{{ loginBtn }}</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        label: 'Sign in',
        labelPw: 'Password',
        loginBtn: 'Go!'   
      }
    },
    props: {
      
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .signin-title {
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    margin: 30px 0 20px;
  }
  .signin-subtitle {    
    text-align: left;
    margin-bottom: 60px;
  }
  .common_area {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
  }
  .field-button-box {
    margin-top: auto;
    background: #f3df4d;
    padding: 12px;    
    &:hover, &:focus {
      background: #888888;
      .button-round {
        color: #fff;
        font-weight: bold;
      }    
    }
  }
</style>
