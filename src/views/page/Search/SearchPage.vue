<template>
    <div class="common_area">
        <text-field></text-field>

        <key-word-box></key-word-box>

        <div class="tag-wrap">
            <tag tag-text="혈압기" color-type="red"></tag>
            <tag tag-text="운동" color-type="green"></tag>
            <tag tag-text="건강기능식품" color-type="midPurple"></tag>
            <tag tag-text="필라테스" color-type="yellowOrange"></tag>
            <tag tag-text="비타민워터" color-type="blue"></tag>
            <tag tag-text="혈당체크방법" color-type="aqua"></tag>
        </div>

        <check-box></check-box>

    </div>
</template>

<script>
    import TextField from "../../components/ui/TextField";
    import Tag from "../../components/ui/Tag";
    import CheckBox from "../../components/ui/CheckBox";
    import KeyWordBox from "../../components/ui/KeywordBox";

    export default {
        name: 'SearchPage',
        data() {
            return {

            }
        },
        props: {
            fOption: {
                type: String,
                default: 's',
            }
        },
        components: {
            KeyWordBox,
            CheckBox,
            Tag,
            TextField
        }
    }
</script>

<style lang="scss" scoped>
    .common_area {
        padding: 0 4vw;
    }
</style>
