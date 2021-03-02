<template>
  <div class="common_area">
    <h2>page</h2>

    <div class="wrap">
      <div class="box">
        <div class="item v1">1</div>
        <div class="item v2">2</div>
        <div class="item v3">3</div>
        <div class="item v4">4</div>
        <div class="item v5">5</div>
        <div class="item v6">6</div>
        <div class="item v7">7</div>
        <div class="item v8">8</div>
        <div class="item v9">9</div>
        <div class="item v10">10</div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Mypage',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    width:100%;
    color: #FFFFFF;
  }
  .box{
    display: grid;
    display: -ms-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-rows:1fr 1fr 1fr 1fr;
  }
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin: 10px;
    background-color: #333;
  }
  .item:nth-child(1){
    -ms-grid-column:1;
    -ms-grid-row: 1;
  }
  .item:nth-child(2){
    -ms-grid-column:2;
    -ms-grid-row: 1;
  }
  .item:nth-child(3){
    -ms-grid-column:1;
    -ms-grid-row: 2;
  }
  .item:nth-child(4){
    -ms-grid-column:2;
    -ms-grid-row: 2;
  }
  .item:nth-child(5) {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
    -ms-grid-column:3;
    -ms-grid-column-span: 2;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
  }
  .item:nth-child(6){
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    -ms-grid-row: 3	;
    -ms-grid-row-span: 2;
  }
  .item:nth-child(7){
    -ms-grid-column:3;
    -ms-grid-row: 3;
  }
  .item:nth-child(8){
    -ms-grid-column:4;
    -ms-grid-row: 3;
  }
  .item:nth-child(9){
    -ms-grid-column:3;
    -ms-grid-row: 4;
  }
  .item:nth-child(10) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 2;
    -ms-grid-column:4;
    -ms-grid-row: 4;

  }
</style>
