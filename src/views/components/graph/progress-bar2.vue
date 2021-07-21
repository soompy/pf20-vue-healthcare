<template>
    <div>
        <div class="value-box" :style="`margin-left: ${{val}}%`">{{val}}</div>
        <div class="progress-wrap progress">
            <div class="progress-bar progress" :style="`width: ${{val}}%;`"></div>
        </div>
    </div>
</template>

<script>
    /**
        1. props의 value값이 1부터 100까지인지(허용범위) 체크
        2. value 값을 width값으로 적용(class(너비 클래스 정의)로하거나 style로 할 것인가 - 클래스가 우선)

        ++ 애니메이션 넣기

        부모의 값이 바뀌면 자식의 값도 바뀌지만 값을 제한할 수 없다.(0~100사이의 값이 들어왔을때 value체크 처리를 할 수 없다. - 값 검증 못한다. )
     */

    export default {
        name: 'practiceName',
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                val: 0
            }
        },
        computed: {

        },
        watch: {
            value(newVal, oldVal) {
                console.log('newVal::oldVal::template', newVal, oldVal)
                this.checkValue()
            }
        },
        created() {

        },
        mounted() {},
        methods: {
              checkValue () {
                if(this.value >= 0 && this.value <= 100) {
                    console.log(this.value)
                    this.val = this.value
                } else {
                    console.log("다시입력");
                    if (this.value < 0) {
                        this.val = 0
                        console.log(this.val)
                    } else {
                        this.val = 100
                    }
                }
            }
        }
    }


/**
    export default {
        name: 'ProgressBar',
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
        },
        created() {
            console.log('value', this.value)
        },
        methods: {}
    }
     */
</script>

<style lang="scss" scoped>
    .value-box {
        display: inline-block;
        position: relative;
        text-align: center;
        padding: 0 4px;
        background: #3F51B5;
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
            border-bottom: 6px solid #3F51B5;
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
            background: #FFCA28;
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
