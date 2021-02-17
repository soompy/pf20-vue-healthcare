<template>
    <div class="cp_common_area">
        <div class="profile-box">
            <h2 class="profile-title">Hi Suri</h2>
            <p class="profile-subtitle">운동을 시작하세요!</p>
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
            font-size: 24px;
            font-weight: bold;
        }
        .profile-subtitle {
            font-size: 14px;
            margin: 6px 0;
        }
    }
</style>
