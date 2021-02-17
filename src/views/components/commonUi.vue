<template>
    <div class="common_area">
        <h2 class="pv-20 ta-l ph-4p bold">한줄 슬라이드</h2>
        <visual-swiper></visual-swiper>

        <h2 class="pt-50 pb-10 ta-l ph-4p bold">더블 슬라이드</h2>
        <visual-swiper-double></visual-swiper-double>

        <br>

        <h2><router-link to="/common-textfield">공통 텍스트필드</router-link></h2>

        <h2><router-link to="/common-button">공통 버튼</router-link></h2>

    </div>
</template>

<script>
    import VisualSwiperDouble from "./swiper/visualSwiperDouble";
    import VisualSwiper from "./swiper/visualSwiper";

    export default {
        name: 'CommonUi',
        components: {
            VisualSwiper,
            VisualSwiperDouble
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
