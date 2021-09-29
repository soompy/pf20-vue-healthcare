<template>
    <div class="todolist-box">
        <p class="todo">뭐까</p>
        <div class="button">
            <button class="check"><i class="ic_check wh-20 black"></i></button>
            <button class="delete"><i class="ic_delete wh-20 black"></i></button>
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
        background: #ffca28;
        color: #000000;
        padding: 8px 10px;
        margin: 8px 0;
        border-radius: 10px;
        .todo {

        }
        .button {
            display: flex;
            margin-left: auto;
        }
    }
</style>
c
