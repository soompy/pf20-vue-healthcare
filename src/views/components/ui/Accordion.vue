<template>
    <div class="accordion-wrap">
        <ul class="accordion-box">
            <li class="accordion-item active">
                <h4><div class="accordion-title"><span class="under-line">오늘의 할일</span><slot><i class="ic_plus wh-20 dark-grey"></i></slot></div></h4>
                <div class="accordion-content">
                    <p>헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회</p>
                </div>
            </li>
            <li class="accordion-item">
                <h4><div class="accordion-title"><span class="under-line">내일 목표 운동량</span><slot><i class="ic_plus wh-20 dark-grey"></i></slot></div></h4>
                <div class="accordion-content">
                    <p>헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회</p>
                </div>
            </li>
            <li class="accordion-item">
                <h4><div class="accordion-title"><span class="under-line">2021년에 달성할 것들</span><slot><i class="ic_plus wh-20 dark-grey"></i></slot></div></h4>
                <div class="accordion-content">
                    <p>헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Accordion',
        data() {
            return {

            }
        },
        props: {

        },
        methods: {

        },
        computed: {

        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .accordion-wrap {
        margin-top: 20px;
        .accordion-box {
            padding: 0 4vw;
            .accordion-item {
                transition: all linear 0.3s;
                border-bottom: 1px solid #dddddd;
                h4 {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    font-size: 13px;
                    padding: 12px 0;
                    .accordion-title {
                        display: flex;
                        width: 100%;
                        span {
                            align-items: center;
                        }
                        i {
                            margin-left: auto;
                        }
                    }

                }
                .accordion-content {
                    display: none;
                    text-align: left;
                    padding: 8px 0;
                    p {
                        font-size: 13px;
                    }
                }
                &.active {
                    .accordion-content {
                        display: block;
                    }
                    .under-line {
                        &:after {
                            display: inline-block;
                            clear: both;
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: 3px;
                            z-index: -1;
                            width: 100%;
                            height: 5px;
                            background: #FBC02D;
                        }
                    }
                }
            }
        }
    }

    .under-line {
        position: relative;
        font-size: 14px;
        &:after {
            display: none;
        }
    }
</style>
