<template>
    <button :class="[sizeClass, shapeClass]">
        <!--
            첫 번째로 버튼 크기 클래스 large-button, regular-button, small-button

            두 번째로 버튼 형태 클래스 regular_fill_button, regular_line_button
            세 번째로 버튼 색상 클래스 blue, grey, primary


        -->
        {{ btnText }}
    </button>
</template>

<script>
    export default {
        name: 'Buttons',
        data() {
            return {
                sizeArr: ['large', 'regular', 'small'],
                shapeArr: ['fill', 'line'],
            }
        },
        props: {
            btnText: {
                type: String,
                default: '버튼 이름',
            },
            sizeType: {
                tpye: String,
                default: 'small'
            },
            shapeType: {
                tpye: String,
                default: 'fill'
            },
            colorType: {
                tpye: String,
                default: ''
            }
        },
        methods: {

        },
        computed: {
            sizeClass() {
                return this.sizeArr.includes(this.sizeType) ? `${this.sizeType}-button` : 'small-button'
            },
            shapeClass () {
              if (this.shapeType === 'fill') return 'regular_fill_button'
              if (this.shapeType === 'line') return 'regular_line_button'
              return 'regular_fill_button'
            },

            // colorClass() {
            //     return this.
            // },
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    //큰 버튼
    .basics {
        font-size: 15px;
        width: 100%;
        height: 56px;
        &.fill {
            .primary {background: #FBC02D;}
            .grey {background: #ABABAB;color: #fff;text-shadow: 1px 1px 5px #1a1a1a;}
            .blue {background: #1A237E;color: #fff;}
        }
        &.outline {
            .grey {background: #ffffff;color: #dddddd;border: 1px solid #ccc;}
            .blue {color: #1A237E;border : 1px solid #1A237E;}
        }
        &.large {
            width: 100%;
            height: 56px;
        }
        &.small {
            display: inline-block;
            font-size: 12px;
            padding: 8px 16px;
        }
        &.round {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.12);
            &.round-fill {background: #1A237E;}
            &.round-line {border: 1px solid #ccc;background: #FFFFFF;}
        }

        &:disabled {
            background: #666666;
            color: #ccc;
        }
    }

</style>
