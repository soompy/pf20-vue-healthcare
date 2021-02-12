<template>
    <div class="area_common">
        <v-calendar is-expanded />
        <v-date-picker v-model='selectedDate' />
    </div>
</template>

<script>
    export default {
        name: 'Calendar',
        data() {
            return {
                selectedDate: null,
            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>

</style>