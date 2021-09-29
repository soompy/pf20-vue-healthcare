<template>
    <div class="common_area">
        <h2 class="title">할일을 기록하고 추가하세요</h2>

        <div class="">
            <text-field></text-field>
<!--            리스트-->
            <todo-list-box></todo-list-box>
<!--            임력-->
        </div>


    </div>
</template>

<script>
    import TextField from "../../components/ui/TextField";
    import TodoListBox from "./TodoListBox";
    export default {
        name: 'TodoList',
        data() {
            return {

            }
        },
        props: {

        },
        components: {
            TodoListBox,
            TextField,
        },
    }
</script>

<style lang="scss" scoped>

</style>
