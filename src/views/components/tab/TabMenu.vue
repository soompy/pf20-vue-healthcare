<template>
  <div class="cp_common_area">
      <ul class="tab-menu-box">
<!--          <li class="tab-list" :class="[selIdx === idx ? active : '']" v-for="(a, idx) in menus" :key="idx" @click="selectedMenu(idx, a)"></li>        -->
          <li class="tab-list active"><span>탭메뉴1</span></li>
          <li class="tab-list"><span>탭메뉴2</span></li>
      </ul>
  </div>
</template>

<script>


export default {
  name: "TabMenu",
  data() {
    return {};
  },
  props: {
      menus: {
          type: Array,
          default () {
              return [
                  {no: 0, name: '탭메뉴1'},
                  {no: 1, name: '탭메뉴2'},
                  {no: 2, name: '탭메뉴3'},
                  {no: 3, name: '탭메뉴4'}
              ]
          }
      }
  },
  watch: {
      curIdx (n) {
        console.log('TabMenu::watch::curIdx::', n, this.menus, this.selIdx)
        this.$nextTick( () => {
          this.setMenu(n)
        })
      },
      menus (n) {
        console.log('TabMenu::watch::menus::', n, this.curIdx, this.selIdx)
        this.$nextTick( () => {
          this.setMenu(this.curIdx)
        })
      }
    },
    created () {
      console.log('TabMenu::created::', this.menus, this.curIdx)
      this.selIdx = this.curIdx
      if (this.menus.length > 0) {
        this.setMenu(this.curIdx)
      }
      window.addEventListener('orientationchange', this.orientationchange)

      // themeClass
      this.setThemeClass()
    },
    methods: {
        selectedMenu (idx, menu) {
            console.log('TabMenu::selectedMenu::', idx, menu)
            this.$emit('changed-tab', idx, menu)
        },
        setMenu (idx) {
            if (idx < this.menus.length) {
            this.selIdx = idx
            }
        }
    }
};

</script>

<style lang="scss" scoped>
    .tab-menu-box {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #eee;
        .tab-list {
            padding: 8px 4vw;
            flex: 1;
            color: #333;
            &.active {
                font-weight: bold;
                span {
                    display: block;
                    position: relative;
                    &:after {
                        clear: both;
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -10px;
                        width: 100%;
                        height: 2px;
                        background: #FBC02D;
                    }
                }
            }
        }
    }
</style>
