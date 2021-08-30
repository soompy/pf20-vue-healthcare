<!--<template>-->
<!--    <div class="accordion-wrap">-->
<!--        <ul class="accordion-box">-->
<!--            <li class="accordion-item active">-->
<!--                <h4><div class="accordion-title"><span class="under-line">오늘의 할일</span><slot><i class="ic_plus wh-20 dark-grey"></i></slot></div></h4>-->
<!--                <div class="accordion-content">-->
<!--                    <p>헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회</p>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="accordion-item">-->
<!--                <h4><div class="accordion-title"><span class="under-line">내일 목표 운동량</span><slot><i class="ic_plus wh-20 dark-grey"></i></slot></div></h4>-->
<!--                <div class="accordion-content">-->
<!--                    <p>헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회</p>-->
<!--                </div>-->
<!--            </li>-->
<!--            <li class="accordion-item">-->
<!--                <h4><div class="accordion-title"><span class="under-line">2021년에 달성할 것들</span><slot><i class="ic_plus wh-20 dark-grey"></i></slot></div></h4>-->
<!--                <div class="accordion-content">-->
<!--                    <p>헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회</p>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
<!--</template>-->

<template>
    <div id="accordion" class="accordion-wrap">
        <ul class="accordion-box">
            <li
                    v-for="(item, index) in items"
                    :key="index"
                    :class="[
                'accordion-item',
                { 'active': isOpen.includes(index) }
            ]"
            >
                <h4>
                    <div class="accordion-title" @click="toggleAccordion(index)">
                        <span class="under-line"> {{ item.title }} </span>
                        <i v-if="!isOpen.includes(index)" class="ic_plus wh-20 dark-grey"/>
                        <i v-else class="ic_minus wh-20 dark-grey"/>
                    </div>
                </h4>
                <div class="accordion-content">
                    <p>
                        {{ item.text }}
                        <strong>{{ item.sub }}</strong>
                    </p>
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
                items: [
                    {
                        title: "오늘의 할일",
                        text: "헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회",
                        sub: "2021.08.30"
                    },
                    {
                        title: "내일 목표 운동량",
                        text: "헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회",
                        sub: "2021.08.30"
                    },
                    {
                        title: "2021년에 달성할 것들",
                        text: "헬스장에 가서 푸쉬업 20개, 스쿼트 50개씩 3세트, 케틀벨 스윙 30회",
                        sub: "2021.08.30"
                    }
                ],
                isOpen: []
            };
        },
        methods: {
            toggleAccordion(index) {
                if (this.isOpen.includes(index)) {
                    this.isOpen = this.isOpen.filter(i => i !== index);
                    return;
                }
                this.isOpen.push(index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .accordion-wrap {
        margin-top: 20px;
        .accordion-box {
            padding: 0 4vw;
            .accordion-item {
                transition: all linear 1.5s;
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
                    transition: all 1.5s ease-in;
                    padding-bottom: 8px;
                    p {
                        font-size: 14px;
                    }
                    strong {
                        display: block;
                        font-size: 12px;
                        margin-top: 4px;
                    }
                }
                .under-line {
                    position: relative;
                    font-size: 14px;
                    &:after {
                        display: none;
                        width: 0;
                        transition: width 5s linear;
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
                            background: #FFCA28;
                        }
                    }
                }
            }
        }
    }
</style>
