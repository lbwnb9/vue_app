<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>    
  </div>
</template>
<script>
export default {
	name:'NavBar'
}
</script>

<style>
.left{
    width: 60px;
    
}
.right{
    width: 60px;
    
}
.nav-bar{
    width: 100%;
    line-height: 44px;
    display: flex;
    background-color: #fff;
    text-align: center;
    
    color: white;


}
.center{
    flex: 1;
}
</style>