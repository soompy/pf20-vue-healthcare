<template>
    <div class="common_area">
<!--       [참고] https://socarframe.socar.kr/8bb3aba4a/p/96f0bd-tag-->

        <div class="container pv-20">
            <p class="pb-10">Outline 기본</p>
            <div class="dp-f align-items-center" style="background-color: #ddd">
                <span class="list-label">Caption</span>
                <span class="list-label black">Caption</span>
                <span class="list-label ss-aqua">Caption</span>
                <span class="list-label tealish">Caption</span>
                <span class="list-label orange">Caption</span>
                <span class="list-label dark-grey">Caption</span>
                <span class="list-label medium-grey">Caption</span>
                <span class="list-label grey">Caption</span>
                <span class="list-label red">Caption</span>
                <span class="list-label green">Caption</span>
                <span class="list-label azul">Caption</span>
                <span class="list-label white">Caption</span>
            </div>
        </div>

        <div class="container pv-20">
            <p class="pb-10">fill 기본</p>
            <div class="dp-f align-items-center">
                <span class="list-label bg-black">Caption</span>
                <span class="list-label bg-ss-aqua">Caption</span>
                <span class="list-label bg-tealish">Caption</span>
                <span class="list-label bg-orange">Caption</span>
                <span class="list-label bg-dark-grey">Caption</span>
                <span class="list-label bg-medium-grey">Caption</span>
                <span class="list-label bg-grey">Caption</span>
                <span class="list-label bg-red">Caption</span>
                <span class="list-label bg-green">Caption</span>
                <span class="list-label bg-azul">Caption</span>
                <span class="list-label black-30">Caption</span>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'CommonTag',
        data() {
            return {

            }
        },
        methods: {

        }
    }


    // () => {
    //     const colors = select('color', ['basic', 'grey', 'blue', 'navy', 'red', 'drivingmodeBasic'], 'basic')
    //
    //     return (
    //         <Tag
    //     text={text('text', 'tag')}
    //     color={colors}
    //     />
    // )
    // }

</script>

<style lang="scss" scoped>

</style>
