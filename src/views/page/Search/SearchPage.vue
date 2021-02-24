<template>
    <div class="common_area">
        <text-field></text-field>
        <div class="search-history">
            <!-- 최근 검색어가 없는 경우 -->
            <p class="blank">최근 검색어가 없습니다.</p>

            <!-- 최근 검색어가 있는 경우 -->

            <!-- 검색어 기능 끄고 켜기  >  small line 버튼 사용 -->

        </div>

        <div class="popular-keyword">
            <tag></tag>
        </div>

        <check-box></check-box>



    </div>
</template>

<script>
    import TextField from "../../components/ui/TextField";
    import Tag from "../../components/ui/Tag";
    import CheckBox from "../../components/ui/CheckBox";

    export default {
        name: 'SearchPage',
        data() {
            return {

            }
        },
        components: {
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
    .search-history {
        .blank {
            padding: 40px 0;
        }
    }
</style>
