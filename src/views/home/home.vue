<!--  -->
<template>
<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-list :titles="['流行','新款','精选']" 
        class="tab-list" 
        @tabClick="tabClick" 
        ref="tabControl"
        v-show="isStop"
        ></tab-list>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="getPosition" @pullingUp="loadMore" :pull-up-load="true">
        <home-sw :banners="banners" @swImgload="swImgload"></home-sw>
        <re-view :recommends="recommends"></re-view>
        <weak-pop></weak-pop>
        <tab-list :titles="['流行','新款','精选']"  
        @tabClick="tabClick" 
        ref="tabControl"     
        ></tab-list>
        <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>

</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabList from '@/components/content/tablist/TabList'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backtop/BackTop'

import HomeSw from './homechildren/HomeSw'
import ReView from './homechildren/ReView'
import WeakPop from './homechildren/WeakPop'

import {getHomeData,
        getGoodsData} from '@/network/homedata'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar,
    TabList,
    GoodsList,
    Scroll,
    BackTop,

    HomeSw,
    ReView,
    WeakPop,
   
},
data() {
//这里存放数据
return {
banners:[],
recommends:[],
currentType:'pop',
isShow:false,
tabOffsetTop:0,
isStop:false,
goods:{
    'pop':{page:0,list:[]},
    'new':{page:0,list:[]},
    'sell':{page:0,list:[]}
}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
getHomeData(){
    getHomeData().then(res=>{
    console.log(res);
    this.banners=res.data.data.banner.list;
    this.recommends=res.data.data.recommend.list;
    })
},
getGoodsData(type){
    const page = this.goods[type].page+1
    getGoodsData(type,page).then(res=>{
    console.log(res)
    this.goods[type].list.push(...res.data.data.list)
    this.goods[type].page+=1
    this.$refs.scroll.finishPullUp()
})},
tabClick(index){
 switch (index) {
     case 0:
         this.currentType='pop'
         break;
     case 1:
         this.currentType='new'
         break;
    case 2:
         this.currentType='sell'
         break;
     default:
         break;
 }
},
backTop(){
    
    this.$refs.scroll.scrollTo(0,0,500)//返回顶部函数 scrollTo  参数（x，y，延迟时间）
},
getPosition(position){   
if (-position.y>1000) {
    this.isShow=true
}else{
    this.isShow=false
}
// this.isShow=(-position.y)>1000
this.isStop=(-position.y)>this.tabOffsetTop
},
loadMore(){
    this.getGoodsData(this.currentType)
    
},
debounce(func,delay){
let timer = null
return function (...args) {
    if(timer) clearTimeout(timer)
    timer =setTimeout(() => {
        func.apply(this,args)
    }, delay);
}
},
swImgload(){
console.log(this.$refs.tabControl.$el.offsetTop)
this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
}
},

created() {
    //请求多个数据
this.getHomeData()
    //请求商品数据
this.getGoodsData('pop')
this.getGoodsData('new')
this.getGoodsData('sell')

},

mounted() {
//监听goodslistitem图片加载
const refresh = this.debounce(this.$refs.scroll.refresh,50)
this.$bus.$on('imgLoad',()=>{
    refresh()
})
//获取tabControl的offset

},

}
</script>
<style scoped>
#home{
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
}
.home-nav{
    background-color: var(--color-text);
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10; */

}

.tab-list{
    position: relative;
    z-index: 9;
    background-color: #fff;
}


.wrapper{
    
   
	position: absolute;
	left: 0;
	right: 0;
	top: 44px;
	bottom: 49px;
    overflow:hidden;
    
}
</style>