<template>
    <div class="todolist-box">
        <p class="todo">뭐까</p>
        <div class="button">
            <button class="check"><i class="ic_check wh-20 white"></i></button>
            <button class="delete"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoListBox',
        data() {
            return {

            }
        },
        props: {

        },
        components: {

        },
    }
</script>

<style lang="scss" scoped>

    .todolist-box {
        display: flex;
        align-items: center;
        background: #cccccc;
        color: #eeeeee;
        .todo {

        }

    }
</style>
c
