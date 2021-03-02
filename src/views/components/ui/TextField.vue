<template>
    <div class="cp_common_area">
        <div class="form-field-line">
            <input type="text" class="field-text" id="field-text" value="Input text"/>
<!--            <label class="field-label" for="field-text">Label</label>-->
            <span class="field-line"></span>
            <div class="field-button-box">
                <button class="button-round"><i class="ic_search black wh-26"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextField',
        data() {
            return {

            }
        },
        props: {

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
    .button-round {
        border-radius: 50%;
        padding: 2px;
        margin-left: 10px;
    }
</style>
