<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="">
            <div class="personal-card-list">
                <strong class="dp-b">연습</strong>
                <span class="dp-b fc-grey">프로그래스 바 연습 computed</span>
                <p-progress-bar :value="20"></p-progress-bar>
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

export default {
    name: 'practiceAutoper',
    data() {
        return {
            valRandom: 0
        }
    },
    mounted() {
        console.log('current', this.swiper)
        setInterval(_ => {
            this.valRandom = Math.floor(Mant.random() * 200)
            console.log('setInterval', this.valRandom)
        },1000)
    }
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
