<template>
    <button :class="{btnSize, btnShape, btnColor}">
        <!--
            첫 번째로 버튼 크기 클래스 large-button, regular-button, small-button
            두 번째로 버튼 형태 클래스 regular_fill_button, regular_line_button
            세 번째로 버튼 색상 클래스 blue, grey, primary
        -->
        {{ btnText }}
    </button>
</template>

<script>
    export default {
        name: 'Buttons',
        data() {
            return {

            }
        },
        props: {
            btnText: {
                type: String,
                default: '버튼 이름',
            },
            btnSize: {
                tpye: String,
                default: ''
            },
            btnShape: {
                tpye: String,
                default: ''
            },
            btnColor: {
                tpye: String,
                default: ''
            }
        },
        methods: {

        },
        computed: {

        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
