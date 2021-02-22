<template>
    <span class="list-label bg-black">{{ tagText }}</span>
</template>

<script>
    export default {
        name: 'Tag',
        data() {
            return {

            }
        },
        props: {
            tagText: {
                type: String,
                default: '캡션',
            },
            btnSize: {
                tpye: String,
                default: ''
            },
            btnShape: {
                tpye: String,
                default: ''
            },
            btnColor: {
                tpye: String,
                default: ''
            }
        },
        methods: {

        },
        computed: {

        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
