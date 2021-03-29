<template>
<div>
<!--    <div class="value-box">{{valueBox}}</div>-->
<!--    <div class="progress-wrap progress">-->
<!--        <div class="progress-bar progress" :style="`width: ${val}%;`"></div>-->
<!--    </div>-->
</div>
</template>

<script>
    /**
        1. props의 value값이 1부터 100까지인지(허용범위) 체크
        2. value 값을 width값으로 적용(class(너비 클래스 정의)로하거나 style로 할 것인가 - 클래스가 우선)
        3. 0 이하 인경우 0 으로 처리, 100 이상인 경우 인경우 100 으로 처리

        ++ 애니메이션 넣기

        this.value 값 이 들어오면 0하고 100사이일때에만 정상동작 하도록 처리할 수 있다.
        만약 100이상, 0이하가 들어오면 기본값으로 0을 리턴한다.
     */

    export default {
        name: 'pProgressBar',
        data() {
            return {}
        },
        props: {
            value: {
                type: Number,
                default: 0,
            }
        },
        computed: {
            val () {
               if(this.value < 0) return 0 // 0 보다 작으면 0 리턴
               if(this.value > 100) return 100 // 100 보다 크면  100 리턴
                return this.value // 그외 는 현재값 리턴
            } // 내부 변수가 업데이트 되면 자동으로 반영 됩니다. watch 와 많이 비교 됩니다.
        },
        created() {
            console.log('value', this.value)
        },
        methods: {}
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
            left: 25%;
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
