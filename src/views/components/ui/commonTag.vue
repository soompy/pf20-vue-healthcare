<template>
    <div class="common_area">
<!--       [참고] https://socarframe.socar.kr/8bb3aba4a/p/96f0bd-tag-->
        <div class="container">
            <h2 class="fs-16 bold">Large Buttons</h2>
            <h3>large_fill_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="large-button large_fill_button">라지버튼 기본</button>

            <p class="mt-16">비활성</p>
            <button class="large-button large_fill_button" disabled>라지버튼 비활성</button>

            <h3>large_fill_button[blue]</h3>
            <p class="mt-16">블루</p>
            <button class="large-button large_fill_button blue">라지버튼 블루</button>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'CommonButton',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
