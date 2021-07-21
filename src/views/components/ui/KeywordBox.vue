<template>
    <div class="search-history">
        <!-- 최근 검색어가 없는 경우 -->
        <p class="blank">최근 검색어가 없습니다.</p>

        <!-- 최근 검색어가 있는 경우 -->
        <ul class="ketword-box">
            <li class="keyword-list"><span class="icon-box"><i class="ic_search white wh-18"></i></span><span class="">건</span>강기능</li>
            <li class="keyword-list"><span class="icon-box"><i class="ic_search white wh-18"></i></span><span class="">건</span>강기능</li>
            <li class="keyword-list"><span class="icon-box"><i class="ic_search white wh-18"></i></span><span class="">건</span>강기능</li>
        </ul>
        <!-- 검색어 기능 끄고 켜기  >  small line 버튼 사용 -->

    </div>
</template>

<script>
    export default {
        name: 'KeyWordBox',
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .search-history {
        .blank {
            padding: 40px 0;
        }
    }

    .ketword-box {
        padding: 8px 0;
        .keyword-list {
            display: flex;
            align-items: center;
            padding: 6px 0;
            .icon-box {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                background: #1A237E;
                border-radius: 50%;
                margin-right: 8px;
            }
        }
    }
</style>
