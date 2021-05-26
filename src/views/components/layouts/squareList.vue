<template>
    <div class="cp_common_area">
        <ul class="square-list">
          <li class="square-item" v-for="item in data" :key="item.icon">
              <div class="list-item-title">
                  <div :class="[item.iconBox]">
                      <i :class="[item.icon, 'wh-30']"></i>
                  </div>
                  <div class="detail-item-info">
                      <h3>{{item.title}}</h3>
                      <span>{{item.subtitle}}</span>
                  </div>
              </div>
              <div class="item-fighre">
                  <strong>{{item.figures}}</strong> {{item.unit}}
              </div>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: "SquareList",
      data() {
        return {
            // item: {
            //     iconBox: '',
            //     icon: '',
            //     title: '',
            //     subtitle: '',
            //     figures: '',
            //     unit: ''
            // }
        };
      },
      components: {

      },
      props: {
          data: {
              type: Array,
              default () { return [] }
          }
      },
      mounted () {
          console.log('mounted::', this.data)
      }
    };
</script>

<style lang="scss" scoped>
    .square-list {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        padding: 20px 4vw;
        .square-item {
            display: grid;
            flex-direction: column;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            .list-item-title {
                margin-bottom: 10px;
                text-align: left;
                .detail-item-info {
                    h3 {
                        font-weight: bold;
                    }
                }
                .title-icon {
                    display: inline-flex;
                    align-items: center;
                    margin-left: auto;
                    border-radius: 8px;
                    &.heart-rate {
                        background: pink;
                    }
                    &.water {
                        background: skyblue;
                    }
                    &.sleep {
                        background: #FFD500;
                    }
                    &.weight {
                        background: #26c68a;
                    }
                }
            }
            .item-fighre {
                margin-top: auto;
                text-align: left;
                strong {
                    font-size: 20px;
                }
            }
        }
    }
</style>
