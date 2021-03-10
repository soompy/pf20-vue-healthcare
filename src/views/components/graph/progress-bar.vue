<template>
    <div class="progress-wrap progress" data-progress-percent="25">
        <div class="progress-bar progress" :class="[percentageClass]"></div>
    </div>
</template>

<script>
    /**
        1. props의 value값이 1부터 100까지인지(허용범위) 체크
        2. value 값을 width값으로 적용(class(너비 클래스 정의)로하거나 style로 할 것인가 - 클래스가 우선)

        ++ 애니메이션 넣기
     */

    export default {
        name: 'ProgressBar',
        data() {
            return {

            }
        },
        props: {
            value: {
                type: Number,
                default: 0
            },
            percentageRange: {
                type: Boolean,
                default: false
            }
        },
        created() {
            console.log('value', this.value)
        },
        computed: {
            percentageClass() {
                // return this.percentageRange.includes(this.percentage) ? `wd-${this.percentage}` : '0'
                return this.percentageRange.true ? console.log('value', this.value) : '꽝'
            }
        }
    }
</script>

<style lang="scss" scoped>
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
            // width: 40%;
        }
    }
</style>
