<template>
  <div class="common_area">
    <calendar class="mt-20"></calendar>
    <tab-menu></tab-menu>

  </div>
</template>

<script>
import Calendar from '../../components/layouts/calendar.vue'
import TabMenu from '../../components/tab/TabMenu.vue'


  export default {
    name: 'Planner',
    data() {
      return {

      }
    },
    components: {
        TabMenu,
    },
  }
        Calendar
</script>

<style lang="scss" scoped>

</style>
