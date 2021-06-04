<template>

    <div class="root-wrap bg-very-light-grey-2">
        <div class="dp-f flex-column content-box wd-1200 pt-50 pb-100">
            <h2 class="txt-upper ta-c fs-20 pb-50 proxima-regular">faq</h2>
            <div class="bg-white pa-70">
                <!-- [DEV] tab 메뉴 영역 -->
                <div class="sub-page-tab-wrap">
                    <div class="sub-page-tab-con">
                        <ul class="tab cf">
                            <li style="cursor: pointer;" :class="{active: activeMenu.value === menu.value}" v-for="menu in menuList" @click="setActiveMenu(menu)">{{menu.text}}</li>
                        </ul>
                    </div>
                </div>
                <!-- [DEV] tab 메뉴 영역 -->

                <!-- [DEV] tab 콘텐츠 영역 : 해당 탭의 콘텐츠가 보여지려면 accordion-box에 active 클래스를 추가해주세요 -->
                <div class="size-100 tab-con-wrap" style="cursor: pointer;">
                    <!-- [Dev] 전체 탭 : 아코디언 형태 : 하나만 열리도록 해주세요 -->
                    <div class="accordion-box active">
                        <ul class="accordion-info" v-for="faq in viewFaqList">
                            <!-- [Dev] 전체 탭 : 활성 아코디언에는 active 클래스를 추가해주히고 i태그 내 ic_plus_small클래스를 ic_minus_small로 바꿔주세요 -->
                            <li class="accordion-item" :class="{active: faq.isActive}" @click="selectItem(faq)">
                                <h4>
                                    <span class="dp-ib proxima-light txt-upper mr-8">q.</span>
                                    {{faq.q}}
                                    <i class="wh-9 black" :class="faq.isActive ? 'ic_minus_small' : 'ic_plus_small'"></i>
                                </h4>
                                <slide-up-down class="fs-13 v-custom-scrollbar-y" tag="div" :active="faq.isActive" :duration="$Const.SLIDE_DURATION">
                                    <div class="accordion-content">
                                        <span v-html="faq.a"></span>
                                    </div>
                                </slide-up-down>
                                <!--<div class="fs-13 v-custom-scrollbar-y" v-html="faq.a"></div>-->
                            </li>
                        </ul>
                    </div>
                    <!-- [Dev] 전체 탭 : 아코디언 형태 : 하나만 열리도록 해주세요 -->

                </div>
                <!-- [DEV] tab 콘텐츠 영역 -->
            </div>
        </div>
    </div>

</template>

<script>
    // import CommonMixin from '../../common/common-mixin'

    export default {
        name: 'Sample',
        // mixins: [CommonMixin],
        components: {},
        data() {
            return {
                activeMenu: {},
                menuList: [],
                viewFaqList: [],
                faqList: {}
            }
        },
        created() {
            this.menuList = this.getFaqMenu()
            this.faqList = this.getFaqList()

            this.setActiveMenu(this.menuList[0])
        },
        methods: {
            setActiveMenu(menu) {
                this.activeMenu = menu

                if (menu.value === 'all') {
                    this.viewFaqList = []
                    Object.keys(this.faqList).forEach(key => {
                        this.faqList[key].forEach(o => {
                            this.viewFaqList.push(o)
                        })
                    })
                } else {
                    this.viewFaqList = this.faqList[menu.value]
                }

                this.viewFaqList.forEach(o => {
                    o.isActive = false
                })
            },
            selectItem(faq) {
                this.viewFaqList.forEach(o => {
                    if (o.q !== faq.q) {
                        o.isActive = false
                    }
                })

                faq.isActive = !faq.isActive
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
