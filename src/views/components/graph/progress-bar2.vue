<template>
<div>
    <div>{{value}}</div>
    <div class="progress-wrap progress">
        <div class="progress-bar progress" :style="`width: ${value}%;`"></div>
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
            /*animation: lengtheningEffect 5.0s linear infinite;*/
            @keyframes lengtheningEffect {
                0%{transform: translateX(0);}
                100%{transform: translateX(100%);}
            }
        }
    }
</style>
