<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="">
            <div class="exercise-wrap">
                <div class="exercise-info-box">
                    <h3>성취</h3>
                    <ul class="exercise-list-box">
                        <li class="exercise-list">
                            <img src="../../../assets/images/path.png" class="icon-box" alt="">
                            <p>활동시간</p>
                            <strong>123</strong>
                        </li>
                        <li class="exercise-list">
                            <img src="../../../assets/images/walk.png" class="icon-box" alt="">
                            <p>걸음 수</p>
                            <strong>1234</strong>
                        </li>
                        <li class="exercise-list maximum">
                            <img src="../../../assets/images/total-walk.png" class="icon-box" alt="">
                            <p>최대 걸음 수</p>
                            <strong>1234</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="">
            <div class="exercise-wrap">
                <div class="exercise-info-box">
                    <h3>성취</h3>
                    <ul class="exercise-list-box">
                        <li class="exercise-list">
                            <img src="../../../assets/images/path.png" class="icon-box" alt="">
                            <p>활동시간</p>
                            <strong>123</strong>
                        </li>
                        <li class="exercise-list">
                            <img src="../../../assets/images/walk.png" class="icon-box" alt="">
                            <p>걸음 수</p>
                            <strong>1234</strong>
                        </li>
                        <li class="exercise-list maximum">
                            <img src="../../../assets/images/total-walk.png" class="icon-box" alt="">
                            <p>최대 걸음 수</p>
                            <strong>1234</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="">
            <div class="exercise-wrap">
                <div class="exercise-info-box">
                    <h3>성취</h3>
                    <ul class="exercise-list-box">
                        <li class="exercise-list">
                            <img src="../../../assets/images/path.png" class="icon-box" alt="">
                            <p>활동시간</p>
                            <strong>123</strong>
                        </li>
                        <li class="exercise-list">
                            <img src="../../../assets/images/walk.png" class="icon-box" alt="">
                            <p>걸음 수</p>
                            <strong>1234</strong>
                        </li>
                        <li class="exercise-list maximum">
                            <img src="../../../assets/images/total-walk.png" class="icon-box" alt="">
                            <p>최대 걸음 수</p>
                            <strong>1234</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </swiper-slide>

        <div class="swiper-pagination bottom-00" slot="pagination"></div>
    </swiper>
</template>

<script>

    export default {
        name: 'healthRecord',
        data() {
            return {
                swiperOptions: {
                    // slidesPerView: '2',
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }

                    // Some Swiper option/callback...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
        },
        component: {

        }
    }
</script>

<style lang="scss" scoped>
    .exercise-wrap {
        padding: 0 4vw;
        .exercise-info-box {
            background: #f8f8f8;
            padding: 12px 4vw;
            border: 1px solid #dddddd;
            h3 {
                text-align: left;
                font-size: 12px;
            }
            .exercise-list-box {
                .exercise-list {
                    display: flex;
                    align-items: center;
                    padding: 4px 0;
                    span {margin-right: 8px;}
                    p {font-size: 13px;}
                    strong {margin-left: auto;}
                    &.maximum {
                        flex-direction: column;
                        justify-content: center;
                        padding-top: 12px;
                        margin-top: 8px;
                        background: #eeeeee;
                        span {margin: 0}
                        strong {margin: auto;}
                    }
                }
            }
        }
    }

    .icon-box {
        display: block;
        width: 20px;
        height: 100%;
        margin: 0 8px 0 0;
    }
</style>
