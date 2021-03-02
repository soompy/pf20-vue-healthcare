<template>
  <div class="cp_common_area">
      <div class="task-wrap">
          <div class="daily">
              <strong>4</strong>
              <span>Fri</span>
          </div>

          <div class="task-box">
              <div class="task-title-wrap">
                  <label class="task-title-box" for="task0">
                      <p class="task-infomation"><strong>기상</strong> <span class="time">09:00</span></p>
                      <input type="checkbox" class="chkBtn" id="task0">
                  </label>
              </div>

              <div class="task-list-wrap">
                  <div class="task-title-wrap">
                      <label class="task-title-box" for="task1">
                          <p class="task-infomation"><strong>기상</strong> <span class="time">09:00</span></p>
                          <input type="checkbox" class="chkBtn" id="task1">
                      </label>
                  </div>

                  <ul class="task-list-box">
                      <li class="task-list">
                          <label class="detail-task" for="detailtask0">
                              <p>양치</p>
                              <input type="checkbox" class="smallchkBtn" id="detailtask0">
                          </label>
                      </li>
                      <li class="task-list">
                          <label class="detail-task" for="detailtask1">
                              <p>양치</p>
                              <input type="checkbox" class="smallchkBtn" id="detailtask1">
                          </label>
                      </li>
                      <li class="task-list">
                          <label class="detail-task" for="detailtask2">
                              <p>양치</p>
                              <input type="checkbox" class="smallchkBtn" id="detailtask2">
                          </label>
                      </li>
                  </ul>
              </div>

              <div class="task-title-wrap finish-task">
                  <label class="task-title-box" for="task0">
                      <p class="task-infomation"><strong>기상</strong> <span class="time">09:00</span></p>
                      <input type="checkbox" class="chkBtn" id="task0" disabled>
                  </label>
              </div>

              <div class="task-title-wrap">
                  <label class="task-title-box" for="task0">
                      <p class="task-infomation"><strong>기상</strong> <span class="time">09:00</span></p>
                      <input type="checkbox" class="chkBtn" id="task0">
                  </label>
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
        background: #fef8ea;
        padding: 20px 0;
        .daily {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            color: #333333;
            padding: 0 8vw 0 4vw;
            strong {
                font-size: 18px;
            }
        }
        .task-box {
            width: 100%;
            margin-right: 4vw;
            color: #333333;
            .task-title-wrap {
                border-radius: 12px;
                padding: 8px 6px 8px 12px;
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
                &.finish-task {
                    background: #F8F8F8;
                    color: #999999;
                }
            }
            .task-list-wrap {
                background: #FFFFFF;
                border-radius: 12px;
                padding: 8px;
                margin-bottom: 12px;
                .task-title-wrap {
                    padding: 0;
                    padding-left: 4px;
                }
                .task-list-box {
                    .task-list {
                        border-radius: 8px;
                        padding: 4px;
                        background: #FFFFFF;
                        margin-bottom: 8px;
                        .detail-task {
                            display: flex;
                            align-items: center;
                            p {font-size: 13px;}
                            .smallchkBtn {
                                margin-left: auto;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
