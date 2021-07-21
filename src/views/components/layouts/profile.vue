<template>
    <div class="cp_common_area">
        <div class="profile-box">
            <p class="profile-title"><span class="under-line"><span class="bold">Hi Suri</span></span></p>
            <strong class="profile-subtitle">운동을 시작하세요!</strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .profile-box {
        text-align: left;
        .profile-title {
            display: inline-block;
            position: relative;
            font-size: 18px;
            font-weight: bold;
            &:after {
                display: block;
                clear: both;
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
            }
            .under-line {
                display: inline-block;
                height: 19px;
                box-shadow: 0 8px 0 0 #FFCA28, 0 8px 0 0 #FFCA28;
            }
        }
        .profile-subtitle {
            display: block;
            font-size: 22px;
            margin-top: 4px;
        }
    }
</style>
