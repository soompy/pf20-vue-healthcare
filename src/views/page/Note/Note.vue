<template>
  <div class="common_area">
    <!-- <tab-menu :menus="menus" :cur-idx="curTab" @changed-tab="selectedMenu"></tab-menu> -->

<!--    더하기 버튼 클릭시-->
<!--    노트 타입선택 > 시간설정 > 노트 입력페이지(제목, 이모티콘) > 저장 후 노트 등록완료-->
    <round-button fillType="line" svgColor="grey" @clickBtn="addNote" :style="`position: fixed;right: 4vw;top: 70px;z-index: 5;`"></round-button>

    <NoteList/>  
  </div>
</template>

<script>
// import TabMenu from '../../components/tab/TabMenu.vue'
import NoteList from '../../components/note/noteList'
import RoundButton from '../../components/ui/RoundButton'
// import Icon from '../../constants/icon'

  export default {
    name: 'Note',
    data() {
      return {
        menus: [
            {no: 0, name: '모든 노트'},
            {no: 1, name: '폴더'}
        ],
        curTab: 0,
        // icon: Icon,
      }
    },
    props: {

    },
    components: {
        RoundButton,
        NoteList,
        // TabMenu
    },
    methods: {
      selectedMenu (idx, menu) {
        console.log('TabMenu::selectedMenu::', idx, menu)
        this.$emit('changed-tab', idx, menu)
      },

      addNote () {
        console.log('addNote')
        this.$router.push({ path: 'create-note' })
      },

    }
  }
</script>

<style lang="scss" scoped>

</style>
