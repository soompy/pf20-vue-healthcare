<template>
    <div class="common_area">
        <AccountBox></AccountBox>

        <router-link to="/main">Main</router-link>
        <router-link to="/mypage">Mypage</router-link>
        <router-link to="/planner">Planner</router-link>
        <router-link to="/note">Note</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/notice">Notice</router-link>
        <router-link to="/">Login</router-link>
        <router-link to="/search-page">Search</router-link>
        <router-link to="/card">Card</router-link>
        <router-link to="/common-ui">CommonUi</router-link>
    </div>
</template>

<script>
    import AccountBox from "../layouts/accountBox";
    export default {
        name: 'Nav',
        data() {
            return {

            }
        },
        components: {
            AccountBox

        }
    }
</script>

<style lang="scss" scoped>
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: 35px;
    }
</style>
