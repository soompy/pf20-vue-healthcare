<template>
    <div class="area_common">
        <h2 class="pv-20 ta-l ph-4p bold">한줄 슬라이드</h2>
        <visual-swiper></visual-swiper>

        <h2 class="pt-50 pb-10 ta-l ph-4p bold">더블 슬라이드</h2>
        <visual-swiper-double></visual-swiper-double>
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
