<template>
    <div class="area_common">
        <v-calendar></v-calendar>
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
            Calendar,
            DatePicker
        }
    }
</script>

<style lang="scss" scoped>

</style>
