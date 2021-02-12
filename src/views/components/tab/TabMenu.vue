<template>
  <div class="common_area">
      <ul class="tab-menu-box">
          <li class="tab-list active">1</li>
          <li class="tab-list">2</li>
      </ul>
  </div>
</template>

<script>


export default {
  name: "TabMenu",
  data() {
    return {};
  },
  components: {}
};

</script>

<style lang="scss" scoped>
    .tab-menu-box {        
        display: flex;
        align-items: center;   
        border-bottom: 2px solid #ccc;     
        .tab-list {            
            padding: 4px 4vw;
            flex: 1;
            color: #333;
            &.active {
                position: relative;
                font-weight: bold;                
                 &:before {
                    display: block;
                    clear: both;
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -2px;                    
                    width: 100%;
                    height: 2px;
                    background: #f3df4d;        
                }
            }           
        }        
    }
</style>