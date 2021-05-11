<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="">
            <div class="personal-card-list">
                <strong class="dp-b">연습</strong>
                <span class="dp-b fc-grey">프로그래스 바 연습 computed</span>
                <!-- <p-progress-bar :value="valRandom"></p-progress-bar> -->
                <p-progress-bar :value="valRandom"></p-progress-bar>
            </div>
        </swiper-slide>

        <swiper-slide class="">
            <div class="personal-card-list">
                <strong class="dp-b">상체</strong>
                <span class="dp-b fc-grey">푸쉬업 목표치</span>
                <progress-bar :value="-30" percentage="30"></progress-bar>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="personal-card-list">
                <strong class="dp-b">코어</strong>
                <span class="dp-b fc-grey">윗몸일으키기 목표치</span>
<!--                <progress-bar-2 :value="valRandom"></progress-bar-2>-->
                <progress-bar-2 :value="valRandom"></progress-bar-2>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="personal-card-list">
                <strong class="dp-b">하체</strong>
                <span class="dp-b fc-grey">스쿼드 목표치</span>
                <progress-bar-3 :value="valRandom" />
            </div>
        </swiper-slide>
        <div class="swiper-pagination bottom-00" slot="pagination"></div>

    </swiper>
</template>

<script>
    import ProgressBar from "../graph/progress-bar";
    import ProgressBar2 from "../graph/progress-bar2";
    import ProgressBar3 from "../graph/progress-bar3";
    import PProgressBar from "../graph/practice-progress-bar";

    export default {
        name: 'AutoPer',
        components: {
            PProgressBar,
            ProgressBar,
            ProgressBar2,
            ProgressBar3,
        },
        data() {
            return {
                valRandom: 0,
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
            setInterval(_ => {
                this.valRandom = Math.floor(Math.random() * 200)
                console.log('setInterval::', this.valRandom)
            }, 1000)
        },        
    }
</script>

<style lang="scss" scoped>
    .personal-card-list {
        text-align: left;
        margin-top: 20px;
        padding: 16px;
        border: 1px solid #dddddd;
    }
</style>
