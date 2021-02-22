<template>
  <div class="common_area">
    <div class="note-wrap">
      <div class="note-box">
        <h2 class="note-title-box"><input type="text" placeholder="Untitled"></h2>
        <div class="">
          <textarea class="note-area" placeholder="Tap here continue..." cols="5"></textarea>
        </div>
      </div>

      <ul class="function-box">
        <li class="function-item">
          <button><span class="icon f1"></span></button>
        </li>
        <li class="function-item">
          <button><span class="icon f2"></span></button>
        </li>
        <li class="function-item">
          <button><span class="icon f3"></span></button>
        </li>
        <li class="function-item">
          <button><span class="icon f4"></span></button>
        </li>
        <li class="function-item">
          <button><span class="icon f5"></span></button>
        </li>
        <li class="function-item">
          <button><span class="icon f6"></span></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateNote',
    data() {
      return {

      }
    },
    components: {

    },
  }
</script>

<style lang="scss" scoped>
  .common_area {
    .note-wrap {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 60px);
      .note-box {
        width: 100% !important;
        padding: 4vw;
        input[type="text"], textarea {
          width: 100%;
          border: none;
          padding: 0;
        }
        .note-area {
          margin-top: 16px;
          font-size: 13px;
          height: 100%;
          height: 65vh;
          resize: none;
        }
      }

      .function-box {
        display: flex;
        align-items: center;
        margin-top: auto;
        width: 100%;
        .function-item {
          flex: 1;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 6px 0;
            background: #f1f1f1;
            border-right: 1px solid #cccccc;
            .icon {
              display: block;
              width: 22px;
              height: 22px;
              margin: auto;
              background: url('../../../assets/images/function.png') no-repeat;
              &.f1 {background-position: 0 0;}
              &.f2 {background-position: -35px 0;}
              &.f3 {background-position: -70px 0;}
              &.f4 {background-position: -105px 0;}
              &.f5 {background-position: -130px 0;}
              &.f6 {background-position: -148px 0;}
            }
          }
        }
      }
    }
  }
</style>
