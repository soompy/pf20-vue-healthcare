<template>
    <div class="common_area">

        <!-- Enabled, Pressed, Disabled, Loading 4가지의 상태를 가지고 화면 상태에 따라 유기적으로 작용하도록 한다. -->
        <div class="container">
            <h2 class="fs-16 fc-red bold">Large Buttons</h2>
            <h3>large_fill_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="large fill primary">라지버튼 기본</button>

            <p class="mt-16">비활성</p>
            <button class="large fill" disabled>라지버튼 비활성</button>

            <h3>large_fill_button[blue]</h3>
            <p class="mt-16">블루</p>
            <button class="large fill blue">라지버튼 블루</button>
        </div>


        <div class="container pt-40">
            <h2 class="fs-16 fc-red bold">Regular Buttons</h2>
            <h3>regular_fill_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="regular-button regular_fill_button primary">레귤러버튼 기본</button>

            <p class="mt-16">비활성</p>
            <button class="regular-button regular_fill_button" disabled>레귤러버튼 비활성</button>

            <h3>large_fill_button[blue]</h3>
            <p class="mt-16">블루</p>
            <button class="regular-button regular_fill_button blue">레귤러버튼 블루</button>

            <h2 class="fs-16 fc-red bold">Regular Buttons - line</h2>
            <h3>regular_line_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="regular-button regular_line_button">레귤러버튼 기본</button>

            <h3>regular_line_button[blue]</h3>
            <p class="mt-16">블루</p>
            <button class="regular-button regular_line_button blue">레귤러버튼 블루</button>
        </div>


        <div class="container pt-40">
            <h2 class="fs-16 fc-red bold">Small Buttons</h2>
            <h3>small_fill_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="small-button small_fill_button primary">스몰버튼 기본</button>

            <p class="mt-16">비활성</p>
            <button class="small-button small_fill_button" disabled>스몰버튼 비활성</button>

            <h3>small_fill_button[blue]</h3>
            <p class="">블루</p>
            <button class="small-button small_fill_button blue">스몰버튼 블루</button>

            <h2 class="fs-16 mt-16 bold">Small Buttons - line</h2>
            <h3>small_line_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="small-button small_line_button">스몰라인버튼 기본</button>

            <h3>small_line_button[blue]</h3>
            <p class="mt-16">블루</p>
            <button class="small-button small_line_button blue">스몰라인버튼 블루</button>


            <h2 class="fs-16 mt-16 bold">Small Buttons - text</h2>
            <h3>small_text_button[primary]</h3>
            <p class="mt-16">기본</p>
            <button class="small-button small_text_button">스몰텍스트버튼 기본</button>

            <h3>small_text_button[blue]</h3>
            <p class="mt-16">블루</p>
            <button class="small-button small_text_button blue">스몰텍스트버튼 블루</button>
        </div>


        <div class="container pt-40">
            <h2 class="fs-16 fc-red bold">Round Button</h2>
            <h3>round_fill_button[primary]</h3>
            <p class="mt-16">라운드버튼 - 기본</p>
            <button class="round-button round_fill_button"><i class="ic_plus wh-26 white"></i></button>

            <h3>round_line_button[primary]</h3>
            <p class="mt-16">라운드버튼 - 라인</p>
            <button class="round-button round_line_button"><i class="ic_plus wh-26 grey"></i></button>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'CommonButton',
        components: {

        },
        data() {
            return {

            }
        },
        methods: {

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
