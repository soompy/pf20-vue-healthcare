<template>
  <div class="common_area">
<!--    달력ui-->
<!--    <calendar class="mt-20"></calendar>-->
<!--    달력ui-->
      <mini-calendar></mini-calendar>
      <task-box></task-box>

  </div>
</template>

<script>
import MiniCalendar from "../../components/layouts/miniCalendar";
import TaskBox from "../../components/note/TaskBox";


  export default {
    name: 'Planner',
    data() {
      return {

      }
    },
    components: {
        TaskBox,
      MiniCalendar,
    },
  }
</script>

<style lang="scss" scoped>

</style>
