<template>
    <div class="profile-box">
        <h2 class="profile-title">Hi Suri</h2>
        <p class="profile-subtitle">오늘 필요한 운동을 간단하고 효율적으로 고릅니다.</p>
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
        .profile-title {
            text-align: left;
            font-size: 18px;
        }
        .profile-subtitle {
            font-size: 14px;
        }
    }
</style>
