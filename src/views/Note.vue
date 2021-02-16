<template>
  <div class="common_area">  
    <tab-menu :menus="menus" :cur-idx="curTab" @changed-tab="selectedMenu"></tab-menu>

  </div>
</template>

<script>
import TabMenu from './components/tab/TabMenu.vue'

  export default {
    name: 'Note',
    data() {
      return {
        menus: [
            {no: 0, name: '모든 노트'},
            {no: 1, name: '폴더'}
        ],
        curTab: 0
      }
    },
    props: {

    },
    components: {
        TabMenu
    },
    methods: {
      selectedMenu (idx, menu) {
        console.log('TabMenu::selectedMenu::', idx, menu)
        this.$emit('changed-tab', idx, menu)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
