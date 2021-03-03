<template>
    <button :class="[fillClass]" class="basics round" @click="click">
        <!-- <i class="ic_plus wh-26"></i> -->
       <i :class="[iconType[icon], svgColor]"><slot></slot></i>
    </button>
</template>

<script>
    import Icon from '@/constants/icon'

    console.log(Icon);

    // 2021.03.02 버튼테마만들기(모양 > 색상 세트)

    export default {
        name: 'RoundButton',
        data() {
            return {
                fillTypeObj: {
                    fill: 'round-fill',
                    line: 'round-line'
                },
                iconType: Icon
            }
        },
        props: {
            fillType: {
                type: String,
                default: 'fill'
            },
            svgColor: {
                type: String,
                default: 'white'
            },
            icon: {
                type: String,
                default: 'plus'
            },
        },
        computed: {
            fillClass() {
                return this.fillTypeObj[this.fillType]
            },
        },
        methods: {
            click() {
                // console.log('click')
                this.$emit('clickBtn')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .basics {
        &.round {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.12);
            &.round-fill {background: #3f51b5;}
            &.round-line {border: 1px solid #ccc;background: #FFFFFF;}
            i {
                width: 70%;
                height: 70%;
            }
        }
    }
</style>
