<template>
    <div class="cp_common_area">
        <ul class="square-list">
          <li class="square-item">
              <div class="list-item-title">
                  <div class="title-icon heart-rate">
                      <i class="ic_like wh-30 ss-pink"></i>
                  </div>
                  <div class="detail-item-info">
                      <h3>Heart rate</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
              </div>
              <div class="item-fighre">
                  <strong>82</strong> bpm
              </div>
          </li>
          <li class="square-item">
              <div class="list-item-title">
                  <div class="title-icon water">
                      <i class="ic_person wh-30 ss-blue"></i>
                  </div>
                  <div class="detail-item-info">
                      <h3>Water</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
              </div>
              <div class="item-fighre">
                  <strong>200</strong> ml
              </div>
          </li>
          <li class="square-item">
              <div class="list-item-title">
                  <div class="title-icon sleep">
                      <i class="ic_time wh-30 medium-grey"></i>
                  </div>
                  <div class="detail-item-info">
                      <h3>Sleep</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
              </div>
              <div class="item-fighre">
                  <strong>6</strong> Hours
              </div>
          </li>
          <li class="square-item">
              <div class="list-item-title">
                  <div class="title-icon weight">
                      <i class="ic_food wh-30 white"></i>
                  </div>
                  <div class="detail-item-info">
                      <h3>Weight</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
              </div>
              <div class="item-fighre">
                  <strong>52</strong> kg
              </div>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: "SquareList",
      data() {
        return {};
      },
      components: {

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
                .detail-item-info {
                    text-align: left;
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
