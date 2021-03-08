<template>
  <div class="common_area">
    <div class="login-box ph-4p">
      <h2 class="signin-title">Sign in <br> Heal Card!</h2>
      <p class="signin-subtitle">Heal Card에 로그인해주세요.</p>

      <div class="form-field-line">
          <input type="text" class="field-text" required id="field-text1"/>
          <label class="field-label" for="field-text1">{{ label }}</label>
          <span class="field-line"></span>
          <p class="form-error-msg">아이디가 맞지 않습니다.</p>
      </div>

      <div class="form-field-line mt-16">
          <input type="text" class="field-text" required id="field-text1"/>
          <label class="field-label" for="field-text1">{{ labelPw }}</label>
          <span class="field-line"></span>
          <p class="form-error-msg">비밀번호가 맞지 않습니다.</p>
      </div>
      <label class="checkbox-ui" for="checkBtn">
          <input type="checkbox" class="check-button2" id="checkBtn">
          <span class="">비밀번호찾기</span>
      </label>
    </div>

    <div class="field-button-box">
        <ul class="social-login">
            <li class=""><button><span class="sns-icon facebook"></span>페이스북</button></li>
            <li><button><span class="sns-icon twitter"></span>트위터</button></li>
            <li><button><span class="sns-icon instagram"></span>인스타그램</button></li>
        </ul>

        <buttons sizeType="large" shapeType="fill" colorType="primary">{{ loginBtn }}</buttons>
    </div>
  </div>
</template>

<script>

  import Buttons from "../../components/ui/Buttons";
  export default {
    name: 'Login',
    data() {
      return {
        label: 'Sign in',
        labelPw: 'Password',
      }
    },
    props: {
        loginBtn: {
            type: String,
            default: 'Login',
        },
    },
    components: {
        Buttons

    }
  }
</script>

<style lang="scss" scoped>
  .common_area {height: calc(100vh - 60px);}
  .signin-title {
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    margin: 30px 0 20px;
  }
  .signin-subtitle {
    text-align: left;
    margin-bottom: 40px;
    color: #777777;
  }
  .common_area {
    display: flex;
    flex-direction: column;
  }
  .field-button-box {
    margin-top: auto;
    .social-login {
        display: flex;
        align-items: center;
        li {
            flex: 1;
            padding: 6px 0;
            .sns-icon {
                display: block;
                width: 40px;
                height: 40px;
                margin: 0 auto 3px;
                background: url('../../../assets/images/snslogo.png') no-repeat;
                background-size: 120px;
                &.facebook {
                    background-position: 0 -138px;
                }
                &.twitter {
                    background-position: -40px -138px;
                }
                &.instagram {
                    background-position: -80px -138px;
                }
            }
            &.active, &:hover, &:focus {
                .sns-icon {
                    &.facebook {
                        background-position: 0 0;
                    }
                    &.twitter {
                        background-position: -40px 0;
                    }
                    &.instagram {
                        background-position: -80px 0;
                    }
                }
            }
        }
    }
  }

  .form-error-msg {
    font-size: 12px;
    color: #E53935;
  }

  /* 체크박스 스타일 */
  .checkbox-ui {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
      margin-top: 8px;
      input.check-button2:after {
          background-image: url("data:image/svg+xml;charset=UTF-8, %3csvg xmlns='http://www.w3.org/2000/svg' id='prefix__ic_check_filled' width='36' height='36' viewBox='0 0 36 36'%3e%3cpath id='prefix__box' d='M0 0H36V36H0z' style='opacity:0;fill:rgba(0,0,0,.1)'/%3e%3cpath id='prefix__빼기_1' d='M17063 23398a12 12 0 1 1 8.486-3.516 11.923 11.923 0 0 1-8.486 3.516zm-3.814-13.494l-.98.984 3.934 3.936 5.9-5.9-.988-.986-4.916 4.922z' data-name='빼기 1' transform='translate(-17045 -23368)' style='fill:rgba(0,0,0,.1)'/%3e%3c/svg%3e ");
          background-position: ccenter;
          background-size: cover !important;
      }
      input.check-button2:checked:after {
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY19jaGVja19maWxsZWQiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xLC5jbHMtMntmaWxsOiMwMGNiZTJ9LmNscy0xe29wYWNpdHk6MH0KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHBhdGggaWQ9ImJveCIgZD0iTTAgMGgzNnYzNkgweiIgY2xhc3M9ImNscy0xIi8+CiAgICA8cGF0aCBpZD0i67m86riwXzEiIGQ9Ik0xNzA2MyAyMzM5OGExMiAxMiAwIDEgMSA4LjQ4Ni0zLjUxNiAxMS45MjMgMTEuOTIzIDAgMCAxLTguNDg2IDMuNTE2em0tMy44MTQtMTMuNDk0bC0uOTguOTg0IDMuOTM0IDMuOTM2IDUuOS01LjktLjk4OC0uOTg2LTQuOTE2IDQuOTIyeiIgY2xhc3M9ImNscy0yIiBkYXRhLW5hbWU9Iuu5vOq4sCAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcwNDUgLTIzMzY4KSIvPgo8L3N2Zz4K');
          background-position: ccenter;
          background-size: cover !important;
      }
      input.check-button2:checked:before {
          background-image: url("data:image/svg+xml;charset=UTF-8, %3csvg xmlns='http://www.w3.org/2000/svg' id='ic_check_filled' width='36' height='36' viewBox='0 0 36 36'%3e%3cdefs%3e%3cstyle%3e .cls-1%7bopacity:0%7d %3c/style%3e%3c/defs%3e%3cpath id='box' d='M0 0h36v36H0z' class='cls-1'/%3e%3cpath id='빼기_1' d='M17063 23398a12 12 0 1 1 8.486-3.516 11.923 11.923 0 0 1-8.486 3.516zm-3.814-13.494l-.98.984 3.934 3.936 5.9-5.9-.988-.986-4.916 4.922z' data-name='빼기 1' transform='translate(-17045 -23368)'/%3e%3c/svg%3e ");
          background-position: ccenter;
          background-size: cover !important;
      }
      input.check-button2:disabled:after {
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwcmVmaXhfX2ljX2NoZWNrX2ZpbGxlZCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMzAgMzAiPgogICAgPHBhdGggaWQ9InByZWZpeF9fYm94IiBkPSJNMCAwSDMwVjMwSDB6IiBzdHlsZT0iZmlsbDojY2NjO29wYWNpdHk6MCIvPgogICAgPHBhdGggaWQ9InByZWZpeF9f67m86riwXzEiIGQ9Ik0xMCAyMUExMSAxMSAwIDAgMS0xIDEwIDExIDExIDAgMCAxIDEwLTFhMTEgMTEgMCAwIDEgMTEgMTEgMTEgMTEgMCAwIDEtMTEgMTF6TTYuMTg0IDguNWwtLjk4NC45ODkgMy45MzQgMy45MzUgNS45LTUuOS0uOTgzLS45ODUtNC45MTYgNC45MTZMNi4xODQgOC41eiIgZGF0YS1uYW1lPSLrubzquLAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC45OTggNC45OTgpIiBzdHlsZT0iZmlsbDojZTllYWViIi8+Cjwvc3ZnPgo=');
          background-position: ccenter;
          background-size: cover !important;
      }
      input.check-button2:disabled:before{display: none;}
      input[type=checkbox] {
          width: 24px;
          height: 24px;
      }
      input[type=checkbox]:before, input[type=checkbox]:after {
          top: 0;
      }
      span {
          font-size: 13px;
      }
  }
</style>
