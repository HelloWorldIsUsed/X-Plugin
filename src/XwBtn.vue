<template>
 <div id="xw-btn">
   {{msg}}
 </div>
</template>
 
<script>
 export default {
  name: 'vue-xw-btn',
  data:function(){
      return{
          msg:'xw'
      }
  }
 }
</script>
 
<style scoped>
  #xw-btn{
      width:100px;
      height:30px;
      background:#999;
  }
</style>