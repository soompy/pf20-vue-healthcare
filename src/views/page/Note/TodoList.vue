<template>
    <div class="common_area">
        <h2 class="title">{{ todoTitle }}</h2>
        <div class="">
            <text-field></text-field>
            <todo-list-box></todo-list-box>
<!--            임력-->
            <div class="form-field-line">
                <input type="text" class="field-text" required id="field-text1"/>
                <label class="field-label" for="field-text1">Label</label>
                <span class="field-line"></span>
                <div class="field-button-box">
                    <button class="button-round">Button</button>
                </div>
            </div>
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
                todoTitle: '할일을 기록하고 추가하세요'
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
    .common_area {
        top: 90px;
        padding: 40px 4vw;
    }
</style>
