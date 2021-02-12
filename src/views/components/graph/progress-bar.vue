<template>
    <div class="common_area">
        <div class="progress-wrap progress" data-progress-percent="25">
            <div class="progress-bar progress"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar'
    }
</script>

<style lang="scss" scoped>
    .progress {
        width: 100%;
        height: 10px;
    }
    .progress-wrap {
        overflow: hidden;
        position: relative;
        background: #96999b;
        margin: 10px 0;    
        box-shadow: 1px 2px 3px #eee;
        .progress-bar {
            background: #f3df4d;
            left: 0;
            position: absolute;
            top: 0;
            width: 40%;
        }
    }
</style>
