<template>
    <div class="container100" style="display: none;">
        <div class="account">
            <span class="profile mr-16"><img src="" alt="" class="wh-20"></span>
            <div class="profile-info">
                <p class="name ta-l">수리</p>
                <p class="id">계정영역</p>
            </div>
        </div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">Mypage</router-link>
        <router-link to="/about">Grape</router-link>
        <router-link to="/about">Note</router-link>
        <router-link to="/about">Community</router-link>
        <router-link to="/about">Notice</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
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