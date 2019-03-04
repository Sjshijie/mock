<template>
  <div id="content" ref="nn">
    <div v-for="item in nn" :key='item.id' class="item" :style="{backgroundImage:'url('+item.imgSrc+')'}">
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      nn:[]
    }
  },
  created() {
    axios.get("number").then(res => {
      this.nn = res.data.list
      if(this.nn.length%3!=0){
        for(var i=0;i<this.nn.length%3;i++){
          this.nn.push({})
        }
      }
    });
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  #content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item{
    width: 33%;
    height:100px;
    margin-bottom:10px ;
    background-size:120%;
    background-position: center
  }
</style>
