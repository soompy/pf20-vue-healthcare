<template>
    <div class="common_area">
        <div class="flex-list-scrollX-wrap pl-4p">

            <!-- [DEV] 아이템이 6개 이하일 땐 flex-list-scrollX-con에 one-line 클래스를 추가해주세요  -->
            <div class="flex-list-scrollX-con cf">
                <!-- 아이템 시작 // 배너 형태로 롤링 시켜주세요!  -->
                <div class="flex-list-scrollX-item gift-main">
                    <div class="gift-list-item">
                        <div class="list-item fc-dark-grey">
                            <span class="dp-b gift-species-bg glass"></span>
                            <p class="fs-14 fw-500 ta-c lh-12">수분 섭취량을 확인해요!</p>
                        </div>
                    </div>
                </div>

                <div class="flex-list-scrollX-item running">
                    <div class="gift-list-item">
                        <div class="list-item fc-dark-grey">
                            <span class="dp-b gift-species-bg first-rounding"></span>
                            <p class="fs-14 fw-500 ta-c lh-12">러닝을 기록해요!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VisualSwiper',
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .flex-list-scrollX-wrap {
        overflow-x: scroll;
        .flex-list-scrollX-con {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            min-width: calc(144vw + 60px) !important;
            max-height: 82vw;
            .flex-list-scrollX-item {
                display: inline-flex;
                position: relative;
                white-space: nowrap;
                margin-right: 10px;
                .gift-list-item {
                    width: 24vw;
                    .list-item {
                        white-space: normal;
                        font-size: initial;
                    }
                }
                &.gift-main {
                    margin-bottom: 15px;
                    &:nth-of-type(n+6) {
                        margin-bottom: 0;
                    }
                }
            }
            &.one-line {
                flex-wrap: nowrap;
                min-width: 100% !important;
                max-width: calc(144vw + 60px) !important;
                .flex-list-scrollX-item {
                    &:last-child {
                        padding-right: 4vw;
                    }
                }
            }
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }

    //일러스트 아이콘
    .gift-species-bg {
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 24vw;
        margin-bottom: 8px;
        &.glass {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' id='Capa_1' enable-background='new 0 0 497 497' height='512' viewBox='0 0 497 497' width='512'%3e%3cg%3e%3cpath d='m91.197 0c-5.662 0-10.201 4.701-9.996 10.36 5.399 148.674 17.013 285.114 45.604 448.72h77.272 88.846 77.272c28.689-164.167 40.231-300.729 45.604-448.72.205-5.659-4.334-10.36-9.996-10.36z' fill='%23e5eef9'/%3e%3cpath d='m126.805 459.08v22.92c0 8.284 6.716 15 15 15h214.455c8.284 0 15-6.716 15-15v-22.92z' fill='%23d5e3f4'/%3e%3cpath d='m118.497 147.021c7.019 97.574 17.797 187.409 33.614 282.058h192.777c15.819-94.661 26.597-184.487 33.615-282.058z' fill='%2398bce5'/%3e%3cpath d='m405.803 0h-39.685c5.662 0 10.201 4.701 9.996 10.359-5.373 147.992-16.915 284.553-45.604 448.72h39.685c28.689-164.167 40.231-300.729 45.604-448.72.205-5.658-4.334-10.359-9.996-10.359z' fill='%23d5e3f4'/%3e%3cpath d='m331.575 459.08v22.92c0 8.284-6.716 15-15 15h39.685c8.284 0 15-6.716 15-15v-22.92z' fill='%23b3ceec'/%3e%3cpath d='m338.819 147.021c-7.018 97.572-17.796 187.398-33.615 282.058h39.685c15.819-94.661 26.597-184.487 33.615-282.058z' fill='%237bacdf'/%3e%3c/g%3e%3c/svg%3e");
        }
        &.running {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3e%3cg%3e%3cpath style='fill:%2319CFFC;' d='M121,98.5H45c-8.291,0-15-6.709-15-15s6.709-15,15-15h76c8.291,0,15,6.709,15,15 S129.291,98.5,121,98.5z'/%3e%3cpath style='fill:%2319CFFC;' d='M121,218.5H45c-8.291,0-15-6.709-15-15s6.709-15,15-15h76c8.291,0,15,6.709,15,15 S129.291,218.5,121,218.5z'/%3e%3cpath style='fill:%2319CFFC;' d='M91,158.5H15c-8.291,0-15-6.709-15-15s6.709-15,15-15h76c8.291,0,15,6.709,15,15 S99.291,158.5,91,158.5z'/%3e%3c/g%3e%3cg%3e%3cpath style='fill:%232864F0;' d='M280.141,51.039c-11.924-7.925-27.744-6.357-37.852,3.75l-82.5,82.5 c-11.719,11.719-11.719,30.703,0,42.422s30.703,11.719,42.422,0l65.112-65.112l46.593,33.563l63.724-29.623L280.141,51.039z'/%3e%3cpath style='fill:%232864F0;' d='M219.789,242.289l-195,195c-11.719,11.719-11.719,30.703,0,42.422 c11.718,11.718,30.703,11.719,42.422,0L241,305.922L219.789,242.289z'/%3e%3c/g%3e%3cg%3e%3cpath style='fill:%233389FF;' d='M482,203.5h-91v-60c0-11.793-7.134-22.955-18.536-27.684c-11.48-4.748-24.401-1.812-32.684,6.482 L219.789,242.289c-11.719,11.719-11.719,30.703,0,42.422l68.789,68.789l-83.789,83.789c-11.719,11.719-11.719,30.703,0,42.422 c11.718,11.718,30.703,11.719,42.422,0l105-105c11.719-11.719,11.719-30.703,0-42.422L283.422,263.5L331,215.922V233.5 c0,16.567,13.433,30,30,30h121c16.567,0,30-13.433,30-30S498.567,203.5,482,203.5z'/%3e%3ccircle style='fill:%233389FF;' cx='436' cy='68.5' r='45'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
        }
    }
</style>
