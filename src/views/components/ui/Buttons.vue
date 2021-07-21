<template>
    <button :class="[sizeClass, shapeClass, colorClass]" class="basics">
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
                default: '',
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
                return this.sizeArr.includes(this.sizeType) ? `${this.sizeType}` : 'small'
            },
            shapeClass () {
              if (this.shapeType === 'fill') return 'fill'
              if (this.shapeType === 'line') return 'outline'
              return 'regular_fill_button'
            },
            colorClass() {
                if (this.colorType === 'primary') return 'primary'
                if (this.colorType === 'grey') return 'grey'
                return 'blue'
            },
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .basics {
        &.fill {
            &.primary {background: #FFCA28;}
            &.grey {background: #ABABAB;color: #fff;text-shadow: 1px 1px 5px #1a1a1a;}
            &.blue {background: #1A237E;color: #fff;}
            &:disabled {background: #ddd;}
        }
        &.outline {
            background: #ffffff;
            &.primary {color: #FFCA28;border : 1px solid #FFCA28;}
            &.blue {color: #1A237E;border : 1px solid #1A237E;}
            &:disabled {background: #dddddd;border: 1px solid #e0e0e0;}
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

    // button (추후활용예정)
/*
    @mixin button-variant(
        $background,
        $border,
        $color: color-contrast($background)
    ) {
        color: $color;
        border-color: $border;

    }

    @mixin button-outline-variant(
        $color
    ) {
        color: $color;
        border-color: $color;
    }
*/
</style>
