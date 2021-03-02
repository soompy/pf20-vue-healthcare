<template>
    <button :class="[fillClass]" class="basics round">
        <i class="ic_plus wh-26 white"></i>
    </button>
</template>

<script>

    export default {
        name: 'RoundButton',
        data() {
            return {
                fillTypeObj: {
                    fill: 'round-fill',
                    line: 'round-line'
                }

            }
        },
        props: {
            fillType: {
                type: String,
                default: 'fill'
            },
        },
        computed: {
            fillClass() {
                return this.fillTypeObj[this.fillType]
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
            &.round-fill {background: #1A237E;}
            &.round-line {border: 1px solid #ccc;background: #FFFFFF;}
        }
    }
</style>
