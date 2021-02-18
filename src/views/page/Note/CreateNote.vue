<template>
  <div class="common_area">
    <div class="note-wrap">
      <h2 class="note-title-box"><input type="text" placeholder="Untitled"></h2>
      <p class="note-area"><textarea placeholder="Tap here continue..." cols="50"></textarea></p>
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
  .note-wrap {
    padding: 4vw;
    input[type="text"], textarea {
      width: 100%;
      border: none;
      padding: 0;
    }
    .note-title-box {

    }
    .note-area {
      margin-top: 16px;
      textarea {
        font-size: 13px;
        height: 100%;
        height: 70vh;
      }
    }
  }

</style>
