<template>
    <div class="common_area">

        <!-- Enabled, Pressed, Disabled, Loading 4가지의 상태를 가지고 화면 상태에 따라 유기적으로 작용하도록 한다. -->
        <div class="container">
            <h2 class="fs-16 fc-red bold">Large Buttons</h2>
            <p class="mt-16">기본</p>
            <button class="basics large fill primary">라지버튼 기본</button>

            <p class="mt-16">비활성</p>
            <button class="basics large fill" disabled>라지버튼 비활성</button>

            <p class="mt-16">블루</p>
            <button class="basics large fill blue">라지버튼 블루</button>
        </div>


        <div class="container pt-40">
            <h2 class="fs-16 fc-red bold">Small Buttons</h2>
            <p class="mt-16">기본</p>
            <button class="basics small fill primary">스몰버튼 기본</button>

            <p class="mt-16">비활성</p>
            <button class="basics small fill" disabled>스몰버튼 비활성</button>

            <p class="mt-16">블루</p>
            <button class="basics small fill blue">스몰버튼 블루</button>

            <h2 class="fs-16 mt-16 bold">Small Buttons - line</h2>
            <p class="mt-16">기본</p>
            <button class="basics small outline primary">스몰라인버튼 기본</button>

            <p class="mt-16">블루</p>
            <button class="basics small outline blue">스몰라인버튼 블루</button>

            <p class="mt-16">비활성</p>
            <button class="basics small outline" disabled>스몰라인버튼 비활성</button>
        </div>


        <div class="container pt-40">
            <h2 class="fs-16 bold">Round Button</h2>
            <p class="mt-16">라운드버튼 - 기본</p>
            <button class="basics round round-fill"><i class="ic_plus wh-26 white"></i></button>

            <p class="mt-16">라운드버튼 - 라인</p>
            <button class="basics round round-line"><i class="ic_plus wh-26 grey"></i></button>
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
</style>
