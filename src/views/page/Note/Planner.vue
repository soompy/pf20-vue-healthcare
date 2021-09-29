<template>
    <div class="common_area">
        <!--    달력ui-->
        <!--    <calendar class="mt-20"></calendar>-->
        <!--    달력ui-->
        <mini-calendar :style="`position: fixed;z-index: 5;background: #ffffff;`"></mini-calendar>

        <todo-list></todo-list>

        <task-box></task-box>

    </div>
</template>

<script>
    import MiniCalendar from "../../components/layouts/miniCalendar";
    import TaskBox from "../../components/note/TaskBox";
    import TodoList from "./TodoList";


    export default {
        name: 'Planner',
        data() {
            return {}
        },
        components: {
            TodoList,
            TaskBox,
            MiniCalendar,
        },
    }
</script>

<style lang="scss" scoped>

</style>
