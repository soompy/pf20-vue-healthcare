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
        display: block;
        position: relative;
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNWVnKZZfy-1CLo75eO5vLhTWFZyeyc7QaI6GgdSalXDIJOCA6t0DSdDDMabrTOdjdYs&usqp=CAU') center center no-repeat;
        background-size: cover;
        border: 1px solid #eeeeee;
        &.upload-profile {
            background: url('../../../assets/images/profile.png') center center no-repeat;
        }
    }
</style>
