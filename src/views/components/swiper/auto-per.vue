<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="">
            <div class="box-shadow2 mt-20 mb-36 ta-l pa-16">
                <strong class="dp-b">Personal</strong>
                <span class="dp-b fc-grey"> task</span>
                <progress-bar></progress-bar>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="box-shadow2 mt-20 mb-36 ta-l pa-16">
                <strong class="dp-b">Personal</strong>
                <span class="dp-b fc-grey"> task</span>
                <progress-bar></progress-bar>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="box-shadow2 mt-20 mb-36 ta-l pa-16">
                <strong class="dp-b">Personal</strong>
                <span class="dp-b fc-grey"> task</span>
                <progress-bar></progress-bar>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="box-shadow2 mt-20 mb-36 ta-l pa-16">
                <strong class="dp-b">Personal</strong>
                <span class="dp-b fc-grey"> task</span>
                <progress-bar></progress-bar>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="box-shadow2 mt-20 mb-36 ta-l pa-16">
                <strong class="dp-b">Personal</strong>
                <span class="dp-b fc-grey"> task</span>
                <progress-bar></progress-bar>
            </div>
        </swiper-slide>
        <swiper-slide class="">
            <div class="box-shadow2 mt-20 mb-36 ta-l pa-16">
                <strong class="dp-b">Personal</strong>
                <span class="dp-b fc-grey"> task</span>
                <progress-bar></progress-bar>
            </div>
        </swiper-slide>
        <div class="swiper-pagination bottom-00" slot="pagination"></div>
    </swiper>
</template>

<script>
    import ProgressBar from "../Progress/progress-bar";

    export default {
        name: 'AutoPer',
        components: {ProgressBar},
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
            ProgressBar,
        }
    }
</script>
