<template>
    <div class="cp_common_area">
        <ul class="square-list">
          <li class="square-item">
              <div class="list-item-title">
                  <div class="detail-item-info">
                      <h3>Heart rate</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
                  <div class="title-icon heart-rate">
                      <i class="ic_like wh-30 ss-pink"></i>
                  </div>
              </div>
              <div class="item-graph">
                  graph area
              </div>
              <div class="item-fighre">
                  <strong>82</strong> bpm
              </div>
          </li>
          <li class="square-item">
              <div class="list-item-title">
                  <div class="detail-item-info">
                      <h3>Water</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
                  <div class="title-icon water">
                      <i class="ic_like wh-30 ss-blue"></i>
                  </div>
              </div>
              <div class="item-graph">
                  graph area
              </div>
          </li>
          <li class="square-item">
              <div class="list-item-title">
                  <div class="detail-item-info">
                      <h3>Sleep</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
                  <div class="title-icon sleep">
                      <i class="ic_like wh-30 ss-pink"></i>
                  </div>
              </div>
              <div class="item-graph">
                  graph area
              </div>
              <div class="item-fighre">
                  <strong>82</strong> bpm
              </div>
          </li>
          <li class="square-item">
              <div class="list-item-title">
                  <div class="detail-item-info">
                      <h3>Weight</h3>
                      <span>Today, 04:27 PM</span>
                  </div>
                  <div class="title-icon weight">
                      <i class="ic_like wh-30 ss-pink"></i>
                  </div>
              </div>
              <div class="item-graph">
                  graph area
              </div>
              <div class="item-fighre">
                  <strong>82</strong> bpm
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
        padding: 0 4vw;
        .square-item {
            display: grid;
            flex-direction: column;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            .list-item-title {
                display: flex;
                align-items: center;
                padding-bottom: 16px;
                .detail-item-info {
                    text-align: left;
                    h3 {
                        font-weight: bold;
                    }
                }
                .title-icon {
                    display: flex;
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
                        background: beige;
                    }
                    &.weight {
                        background: green;
                    }
                }
            }
            .item-fighre {
                margin-top: auto;
                strong {
                    font-size: 20px;
                }
            }
        }
    }
</style>
