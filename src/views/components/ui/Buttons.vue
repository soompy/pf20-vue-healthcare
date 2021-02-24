<template>
    <button :class="[sizeClass, shapeClass, colorClass]">
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
            // shapeClass() {
            //     return this.
            // },
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
    .large-button {
        font-size: 15px;
        width: 100%;
        height: 56px;
        &.large_fill_button.primary {background: #FBC02D;}
        &.large_fill_button.grey {background: #ABABAB;color: #fff;text-shadow: 1px 1px 5px #1a1a1a;}
        &.large_fill_button.blue {background: #1A237E;color: #fff;}
        &:disabled {
            background: #666666;
            color: #ccc;
        }
    }

    //레귤러 버튼
    .regular-button {
        font-size: 14px;
        width: 100%;
        height: 46px;
        &.regular_fill_button.primary {background: #FBC02D;}
        &.regular_fill_button.grey {background: #ABABAB;color: #fff;text-shadow: 1px 1px 5px #1a1a1a;}
        &.regular_fill_button.blue {background: #1A237E;color: #fff;}
        &:disabled {
            background: #666666;
            color: #ccc;
        }

        &.regular_line_button {
            background: #ffffff;
            box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.12);
            &.blue {
                color: #1A237E;
            }
            &:disabled {
                background: #666666;
                color: #ccc;
            }
        }
    }

    //스몰 버튼
    .small-button {
        display: inline-block;
        font-size: 12px;
        padding: 8px 16px;
        &.small_fill_button.primary {background: #FBC02D;}
        &.small_fill_button.grey {background: #ABABAB;color: #fff;text-shadow: 1px 1px 5px #1a1a1a;}
        &.small_fill_button.blue {background: #1A237E;color: #fff;}
        &:disabled {
            background: #666666;
            color: #ccc;
        }

        &.small_line_button {
            background: #ffffff;
            border: 1px solid #ccc;
            &.blue {
                color: #1A237E;
                border : 1px solid #1A237E;
            }
            &:disabled {
                background: #666666;
                color: #ccc;
            }
        }
        &.small_text_button {
            &.blue {
                color: #1A237E;
            }
            &:disabled {
                background: #666666;
                color: #ccc;
            }
        }
    }

    // 라운드 버튼
    .round-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.12);
        &.round_fill_button {
            background: #1A237E;

        }
        &.round_line_button {
            border: 1px solid #ccc;
            background: #FFFFFF;
        }
    }

</style>
