<template>
    <div class="cp_common_area">
        <div class="form-field-line">
            <input type="text" class="field-text" id="field-text" v-on:input="typing" v-bind:value="inputVal" placeholder="검색어를 입력하세요:)"/>
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
                inputVal: ''
            }
        },
        props: {

        },
        methods: {
            typing(e) {
                this.inputVal = e.target.inputVal
            }
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
