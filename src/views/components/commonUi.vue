<template>
    <div class="common_area">
        <h2 class="pv-20 ta-l ph-4p bold">한줄 슬라이드</h2>
        <visual-swiper></visual-swiper>

        <h2 class="pt-50 pb-10 ta-l ph-4p bold">더블 슬라이드</h2>
        <visual-swiper-double></visual-swiper-double>

        <br>

        <h2><router-link to="/common-textfield">공통 텍스트필드</router-link></h2>

        <h2><router-link to="/common-button">공통 버튼</router-link></h2>

        <h2><router-link to="/common-tag">공통 태그</router-link></h2>

        <h2 class="pt-50 pb-10 ta-l ph-4p bold">공통 태그</h2>
        <div class="dp-f">
            <tag shapeType="" colorType="yellowOrange"></tag>
            <tag shapeType="fill" colorType="yellowOrange"></tag>
            <tag shapeType="gradient" colorType="yellowOrange"></tag>
        </div>

        <h2 class="pt-50 pb-10 ta-l ph-4p bold">체크박스</h2>
        <check-box></check-box>

    </div>
</template>

<script>
    import VisualSwiperDouble from "./swiper/visualSwiperDouble";
    import VisualSwiper from "./swiper/visualSwiper";
    import CheckBox from "./ui/CheckBox";
    import Tag from "./ui/Tag";

    export default {
        name: 'CommonUi',
        components: {
            Tag,
            CheckBox,
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
