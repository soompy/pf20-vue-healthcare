<template>
  <div class="cp_common_area">
      <div class="task-wrap">
          <div class="daily">
              <strong>4</strong>
              <span>Fri</span>
          </div>

          <div class="task-box">
              <div class="task-title-wrap">
                  <label class="task-title-box" for="task">
                      <p class="task-infomation"><strong>기상</strong> <span class="time">09:00</span></p>
                      <input type="checkbox" class="chkBtn" id="task">
                  </label>
              </div>

              <div class="task-list-wrap">
                  <div class="task-title-wrap">
                      <label class="task-title-box" for="task">
                          <p class="task-infomation"><strong>기상</strong> <span class="time">09:00</span></p>
                          <input type="checkbox" class="chkBtn" id="task">
                      </label>
                  </div>

                  <ul class="task-list-box">
                      <li class="task-list">
                          <p>양치</p>
                          <input type="checkbox" class="smallchkBtn" id="task">
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>



  export default {
    name: 'TaskBox',
    data() {
      return {

      }
    },
    components: {

    },
  }
</script>

<style lang="scss" scoped>
    .task-wrap {
        display: flex;
        justify-content: flex-start;
        .daily {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            color: #333333;
            padding: 0 8vw 0 4vw;
            strong {
                font-size: 18px;
            }
            span {

            }
        }
        .task-box {
            width: 100%;
            margin-right: 4vw;
            .task-title-wrap {
                border: 1px solid #dddddd;
                border-radius: 12px;
                padding: 8px 12px;
                background: #FFFFFF;
                margin-bottom: 12px;
                .task-title-box {
                    display: flex;
                    align-items: center;
                    .task-infomation {
                        text-align: left;
                        font-size: 14px;
                        padding-right: 4vw;
                        .time {
                            font-size: 12px;
                        }
                    }
                    .chkBtn {
                        flex-shrink: 0;
                        margin-left: auto;
                    }
                }
                .time {
                    display: block;
                }
            }
            .task-list-wrap {
                border: 1px solid #dddddd;
                background: #eeeeee;
                border-radius: 12px;
                padding: 8px;
                margin-bottom: 12px;
                .task-list-box {
                    .task-list {

                    }
                }
            }
        }

    }
</style>
