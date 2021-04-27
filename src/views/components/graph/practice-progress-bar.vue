<template>
<div>
    <div class="value-box" :style="`margin-left: ${val}%`">{{ val }}</div>
    <div style="padding: 0 10px;">
        <div class="progress-wrap progress">
            <div class="progress-bar progress" :style="`width: ${val}%`"></div>
        </div>
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
        name: 'practicePage',
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
            //  checkValue() {
            //      return this.value
            //  }
        },
        watch: {
          value(newVal, oldVal) {
                console.log('newVal::oldVal::template', newVal, oldVal)
                this.checkValue() 
            }  
        },
        created() {
            // this.checkValue();
        },
        mounted() {

        },
        methods: {
            checkValue() {
                console.log('value', this.value)
                if(this.value >= 0 && this.value <= 100) {
                    this.val = this.value
                } else {
                    console.log("0~100까지의 숫자만 입력")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .value-box {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        padding: 0 4px;
        background: #3f51b5;
        color: #FFFFFF;
        width: 30px;
        height: 26px;
        border-radius: 50%;
        &:after {
            display: block;
            clear: both;
            content: '';
            position: absolute;
            left: 9px;
            bottom: -3px;
            width: 0px;
            height: 0px;
            border-top: 13px solid transparent;
            border-right: 13px solid #3f51b5;            
            transform: rotate(45deg);
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
