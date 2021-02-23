<template>
    <div class="checkbox-wrap">
        <ul class="checkbox">
            <li class="checkbox-item">
                <input type="radio" id="f-option" name="selector">
                <label for="f-option">Pizza</label>

                <div class="check"></div>
            </li>
            <li class="checkbox-item">
                <input type="radio" id="s-option" name="selector">
                <label for="s-option">Bacon</label>

                <div class="check"><div class="inside"></div></div>
            </li>
            <li class="checkbox-item">
                <input type="radio" id="t-option" name="selector">
                <label for="t-option">Cats</label>

                <div class="check"><div class="inside"></div></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CheckBox',
        data() {
            return {

            }
        },
        props: {
            btnText: {
                type: String,
                default: '버튼 이름',
            },
            btnSize: {
                tpye: String,
                default: ''
            },
            btnShape: {
                tpye: String,
                default: ''
            },
            btnColor: {
                tpye: String,
                default: ''
            }
        },
        methods: {

        },
        computed: {

        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato');

    .checkbox-wrap {
        .checkbox {
            display: flex;
            align-items: center;
            justify-content: center;
            .checkbox-item {
                display: block;
                flex: 1;
                position: relative;
                color: #AAAAAA;
                input[type=radio]{
                    position: absolute;
                    visibility: hidden;
                }
                label {
                    display: block;
                    position: relative;
                    font-weight: 300;
                    font-size: 1.2em;
                    z-index: 9;
                    cursor: pointer;
                    -webkit-transition: all 0.25s linear;
                }
                .check {
                    display: block;
                    position: absolute;
                    border: 2px solid #AAAAAA;
                    border-radius: 100%;
                    height: 16px;
                    width: 16px;
                    top: 7px;
                    left: 7px;
                    z-index: 5;
                    transition: border .25s linear;
                    -webkit-transition: border .25s linear;
                    &::before {
                        display: block;
                        position: absolute;
                        content: '';
                        border-radius: 100%;
                        height: 8px;
                        width: 8px;
                        top: 2px;
                        left: 2px;
                        margin: auto;
                        transition: background 0.25s linear;
                        -webkit-transition: background 0.25s linear;
                    }
                }
                &:hover {
                    label {
                        color: #F9A825;
                    }
                    .check {
                        border: 2px solid #F9A825;
                    }
                }

                input[type=radio]:checked ~ .check {
                    border: 2px solid #F9A825;
                }

                input[type=radio]:checked ~ .check::before{
                    background: #F9A825;
                }

                input[type=radio]:checked ~ label{
                    color: #F9A825;
                }
            }
        }
    }
</style>
