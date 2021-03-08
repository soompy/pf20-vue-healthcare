<template>
    <span class="profile mr-16"></span>
</template>

<script>
    export default {
        name: 'ProfileImg',
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .profile {
        position: relative;
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        background: url('../../../assets/images/profile.png') center center no-repeat;
        background-size: cover;
        border: 1px solid #777777;
    }
</style>
