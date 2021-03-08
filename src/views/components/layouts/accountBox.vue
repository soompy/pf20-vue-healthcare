<template>
    <div class="account">
        <profile-img></profile-img>
        <div class="profile-info">
            <p class="name">수리</p>
            <p class="id">suri@healcard.com</p>
        </div>
    </div>
</template>

<script>
    import ProfileImg from "../ui/ProfileImg";
    export default {
        name: 'AccountBox',
        components: {
            ProfileImg
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .account {
        display: flex;
        padding: 20px 16px;
        background: #FBC02D;
        .profile-info {
            text-align: left;
            .name {
                font-weight: bold;
            }
            .id {
                font-size: 13px;
            }
        }
    }
</style>
