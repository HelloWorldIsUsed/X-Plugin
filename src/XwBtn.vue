<template>
  <div class="xw-btn" @click="handleClick">
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
  },
  methods:{
    handleClick(event){
      this.$emit('click', event)
    }
  }
 }
</script>
 
<style scoped>
  .xw-btn{
      width:100px;
      height:30px;
      border-radius: 5px;
      background:#999;
      color:white;
      text-align: center;
      line-height: 30px;
  }
</style>