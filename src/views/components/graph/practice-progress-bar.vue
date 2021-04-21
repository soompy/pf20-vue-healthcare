<template>
<div>
    <div class="value-box" :style="`margin-left: calc(${val}% - 30px)`">{{val}}</div>
    <div class="progress-wrap progress">
        <div class="progress-bar progress" :style="`width: ${val}%;`"></div>
    </div>
</div>
</template>

<script>
    /**
        1. props의 value값이 1부터 100까지인지(허용범위) 체크
        2. value 값을 width값으로 적용(class(너비 클래스 정의)로하거나 style로 할 것인가 - 클래스가 우선)
        3. 0 이하 인경우 0 으로 처리, 100 이상인 경우 인경우 100 으로 처리

        ++ 애니메이션 넣기


             부모의 값이 변경되어도 값이 변경되지 않음 .
                this.val값의 변경이 없음
     */
    export default {
        name: 'ppp',
        data() {
            return {
                val: 0
            }
        },
        props: { // 값을 전달
            value: {
                type: Number,
                default: 0
            }
        },
        created() {
            this.checkValue();
        },
        methods: {
            checkValue() {
                if(this.value >= 0 && this.value <= 100 ) {
                    this.val = this.value
                    console.log(this.val);
                } else {                                                         
                    console.log('0~100까지만')
                    if(this.value < 0 ){
                        this.val = 0
                    } else {
                        this.val = 100
                    }
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .value-box {
        display: inline-block;
        position: relative;
        text-align: center;

        padding: 0 4px;
        background: #3f51b5;
        color: #FFFFFF;
        border-radius: 6px;
        &:after {
            display: block;
            clear: both;
            content: '';
            position: absolute;
            left: 50%;
            bottom: -6px;
            width: 0px;
            height: 0px;
            border-top: 6px solid transparent;
            border-bottom: 6px solid #3f51b5;
            border-right: 6px solid transparent;
            border-left: 6px solid  transparent;
            transform: rotate(90deg);
        }
    }
    .progress {
        width: 100%;
        height: 10px;
    }
    .progress-wrap {
        overflow: hidden;
        position: relative;
        background: #96999b;
        margin: 10px 0;
        box-shadow: 1px 2px 3px #eee;
        .progress-bar {
            background: #FBC02D;
            left: 0;
            position: absolute;
            top: 0;
            /*animation: lengtheningEffect 5.0s linear infinite;*/
            @keyframes lengtheningEffect {
                0%{transform: translateX(0);}
                100%{transform: translateX(100%);}
            }
        }
    }
</style>
