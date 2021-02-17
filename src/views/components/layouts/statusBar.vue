<template>
    <div class="cp_common_area">
        <div><strong>Suri</strong>님의 진행도</div>
        <progress-bar></progress-bar>
    </div>
</template>

<script>
    import ProgressBar from "../graph/progress-bar";
    export default {
        name: 'StatusBar',
        data() {
            return {

            }
        },
        components: {
            ProgressBar

        }
    }
</script>

<style lang="scss" scoped>

</style>
