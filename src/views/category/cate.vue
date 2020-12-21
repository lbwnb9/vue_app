<!--  -->
<template>
<div class="cate">
<nav-bar class="cate-item">
     <div slot="left"  @click="back">
            <img src="@/assets/img/back.svg" alt="" style="margin-top: 10px;"> 
        </div>
    <div slot="center" style="color:black">商品分类</div></nav-bar>
<div  class="all">
    <van-sidebar v-model="activeKey">
    <van-sidebar-item v-for="(item,index) in this.cartgoryList"  :key="item.maitKey"  :title="item.title" @click="showMessage(index)">
        </van-sidebar-item>
    </van-sidebar>
<div class="showimg">
  <div class="showimg-item" v-for="item in this.imgList" :key="item.index">
     <a :href="item.link">
      <img :src="item.image" alt="">
        <div class="showimg-title">{{item.title}}</div>
        </a>
    </div>
</div>
</div>

</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getCartData,getSubCartData} from '@/network/homedata'
// import Scroll from '@/components/common/scroll/Scroll.vue'
export default {

components: {
    // Scroll
    NavBar
},
data() {
//这里存放数据
return {
activeKey:0,
cartgoryList:[],
maitKey:3627,
imgList:[],
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
getCartData(){
    getCartData().then(res=>{
        // console.log(res)
        this.cartgoryList=res.data.data.category.list
        // console.log(this.cartgoryList)
    //         for (let index = 0; index < this.cartgoryList.length; index++) {
    //             this.maitKey=this.cartgoryList[index].maitKey 
    //             this.maitKeyList.push(this.maitKey)            
    //  }
            // console.log(this.maitKeyList)       
    }
    )
},
showMessage(index){
   this.maitKey=this.cartgoryList[index].maitKey 
    // console.log(this.maitKey)
    getSubCartData(this.maitKey).then(
        res=>{
            console.log(res)
            this.imgList=res.data.data.list
            console.log(this.imgList)
        }
    )

},
back(){
    this.$router.push('/home')
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.getCartData(),
getSubCartData(this.maitKey)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},

}
</script>
<style scoped>
.cate{
    height: 100vh;
    background-color: #f7f8fa;
}
.cate-item{
    /* box-shadow: 0 1px 1px rgba(100, 100,100, 0.1);  */
    position: relative;
    z-index: 19;
    background-color: #f7f8fa;
    height: 44px;
}
.showimg{
    width: 200px;
    background-color: #f7f8fa;
    flex: 1;
}
.all{
    display: flex;
}
.showimg-item{
   float: left;
}
.showimg-item img{
    height: 80px;
    width: 80px; 
}
.showimg-title{
    text-align: center;
    font-size: 14px;
}
</style>