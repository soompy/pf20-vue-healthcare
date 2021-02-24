<template>
    <div class="tag-wrap">
        <span :class="[tagType, tagColor]">{{ tagText }}</span>
<!--        <span class="label-outline yellowOrange">Caption</span>-->
<!--        <span class="label-outline aqua">Caption</span>-->
<!--        <span class="label-outline red">Caption</span>-->
<!--        <span class="label-outline green">Caption</span>-->
<!--        <span class="label-outline midPurple">Caption</span>-->

<!--        lable-   outline / fill / gradient 3종이 있다.-->
<!--        색은 동일-->
    </div>
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
            // listLabel: {
            //     type: String,
            //     default: '',
            // }
        },
        methods: {

        },
        computed: {
            // listLabel() {
            //     return this.type === 'labelSize' ? 'tag-label' : ''
            // }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
