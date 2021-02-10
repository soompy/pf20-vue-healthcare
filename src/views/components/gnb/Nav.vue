<template>
    <div class="common_area">
        <div class="account">
            <span class="profile mr-16"><img src="" alt="" class="wh-20"></span>
            <div class="profile-info">
                <p class="name ta-l">수리</p>
                <p class="id">계정영역</p>
            </div>
        </div>
        <router-link to="/">Home</router-link>
        <router-link to="/mypage">Mypage</router-link>
        <router-link to="/grape">Grape</router-link>
        <router-link to="/note">Note</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/notice">Notice</router-link>
        <router-link to="/grape">Grape</router-link>
        <router-link to="/common-ui">commonUi</router-link>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    a {
        display: block;
        padding: 10px;
    }
    .account {
        display: flex;
        padding: 20px 16px;
        border-bottom: 1px solid #ccc;
        .profile {
            width: 50px;
            height: 50px;
            background: #ccc;
        }
    }
</style>
