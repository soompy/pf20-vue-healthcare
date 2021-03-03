<template>
    <div class="common_area">
<!--       [참고] https://socarframe.socar.kr/8bb3aba4a/p/96f0bd-tag-->

        <div class="container pv-20">
            <p class="pb-10">Outline 기본</p>
            <div class="tag-wrap">
                <span class="label-outline">Caption</span>
                <span class="label-outline yellowOrange">Caption</span>
                <span class="label-outline aqua">Caption</span>
                <span class="label-outline red">Caption</span>
                <span class="label-outline green">Caption</span>
                <span class="label-outline midPurple">Caption</span>
                <span class="label-outline blue">Caption</span>
            </div>
        </div>

        <div class="container pv-20">
            <p class="pb-10">fill 기본</p>
            <div class="tag-wrap">
                <span class="label-fill">Caption</span>
                <span class="label-fill yellowOrange">Caption</span>
                <span class="label-fill aqua">Caption</span>
                <span class="label-fill red">Caption</span>
                <span class="label-fill green">Caption</span>
                <span class="label-fill midPurple">Caption</span>
                <span class="label-fill blue">Caption</span>
            </div>
        </div>


        <div class="container pv-20">
            <p class="pb-10">gradient 기본</p>
            <div class="tag-wrap">
                <span class="label-gradient">Caption</span>
                <span class="label-gradient yellowOrange">Caption</span>
                <span class="label-gradient aqua">Caption</span>
                <span class="label-gradient red">Caption</span>
                <span class="label-gradient green">Caption</span>
                <span class="label-gradient midPurple">Caption</span>
                <span class="label-gradient blue">Caption</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CommonTag',
        data() {
            return {

            }
        },
        methods: {

        }
    }

</script>

<style lang="scss" scoped>
    .tag-wrap {
        display: flex;
        align-items: center;
        overflow-x: auto;
        flex-wrap: nowrap;
        margin: 16px 0 8px;
        .label-outline, .label-fill, .label-gradient {
            display: inline-flex;
            position: relative;
            white-space: nowrap;
            border-radius: 8px;
            padding: 0 8px;
            margin-right: 6px;
        }

        .label-outline {
            border: 1px solid #1a1a1a;
            &.yellowOrange {
                border: 1px solid #FFB300;
                color: #FFB300;
                text-shadow: 1px 1px 2px #ddd;
            }
            &.aqua {
                border: 1px solid #40C3C4;
                color: #40C3C4;
            }
            &.red {
                border: 1px solid #E53935;
                color: #E53935;
            }
            &.green {
                border: 1px solid #26c68a;
                color: #26c68a;
            }
            &.midPurple {
                border: 1px solid #5E35B1;
                color: #5E35B1;
            }
            &.blue {
                border: 1px solid #3f51b5;
                color: #3f51b5;
            }
        }

        .label-fill {
            background: #1a1a1a;
            color: #FFFFFF;
            &.yellowOrange {
                background: #FFB300;
                color: #333;
            }
            &.aqua {
                background: #40C3C4;
            }
            &.red {
                background: #E53935;
            }
            &.green {
                background: #26c68a;
            }
            &.midPurple {
                background: #5E35B1;
            }
            &.blue {
                background: #3f51b5;
            }
        }

        .label-gradient {
            background: linear-gradient(135deg,  #1a1a1a 5%,#eeeeee 56%,#1a1a1a 100%,#cccccc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a1a1a', endColorstr='#cccccc',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
            color: #1a1a1a;
            &.yellowOrange {
                background: linear-gradient(135deg,  #FFB300 5%,#eeeeee 56%,#FFB300 100%,#cccccc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFB300', endColorstr='#cccccc',GradientType=1 );
            }
            &.aqua {
                background: linear-gradient(135deg,  #40C3C4 5%,#eeeeee 56%,#40C3C4 100%,#cccccc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#40C3C4', endColorstr='#cccccc',GradientType=1 );
            }
            &.red {
                background: linear-gradient(135deg,  #E53935 5%,#eeeeee 56%,#E53935 100%,#cccccc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E53935', endColorstr='#cccccc',GradientType=1 );
            }
            &.green {
                background: linear-gradient(135deg,  #26c68a 5%,#eeeeee 56%,#26c68a 100%,#cccccc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#26c68a', endColorstr='#cccccc',GradientType=1 );
            }
            &.midPurple {
                background: linear-gradient(135deg,  #5E35B1 5%,#eeeeee 56%,#5E35B1 100%,#cccccc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5E35B1', endColorstr='#cccccc',GradientType=1 );
            }
            &.blue {
                background: linear-gradient(135deg,  #3f51b5 5%,#eeeeee 56%,#3f51b5 100%,#cccccc 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f51b5', endColorstr='#cccccc',GradientType=1 );
            }
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>
