<!--  -->
<template>
<div id="detail">
    <!-- 顶部导航区域 -->
    <nav-bar class="detail-item">
        <div slot="left" class="left-item" @click="back">
            <img src="@/assets/img/back.svg" alt="">
        </div>
        <div slot="center" class="titles">
            <div v-for="(item,index) in titles" :key="item.index" class="center-item" 
            :class="{active:index===currentIndex}"
            @click="itemClick(index)"
            >{{item}}</div>
            
        </div>
    </nav-bar>
    <!-- <div>{{$store.state.cartList.length}}</div> -->
    <!-- 轮播区域 -->
    <scroll class="content" ref="scroll" @scroll="currentScroll" :probe-type="3">
        <detail-sw :topImage="topImage"></detail-sw>
   <!-- 商品信息区域 -->
        <!-- <div class="goods" v-if="Object.keys(goods).length !== 0">
       <div class="goods-title">{{goods.title}}</div>
       <div class="price">
           <span class="newprice">{{goods.newPrice}}</span>
            <span class="oldprice">{{goods.oldPrice}}</span>
            <span class="desword">{{goods.discountDesc}}</span>
       </div>
       <div class="columns">
           <span>{{goods.columns[0]}}</span>
           <span>{{goods.columns[1]}}</span>
           <span>{{goods.services[goods.services.length-1].name}}</span>
       </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" height="12px" width="12px">
            <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
        </div> -->
        <detail-base-info :goods="goods"></detail-base-info>
    <!-- 商家信息区域 -->
        <detail-shop-info :shop="shop"></detail-shop-info>
    <!-- 商品展示区域 -->
        <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
            <div class="info-desc clear-fix">
                <div class="start"></div>
                <div class="desc">{{detailInfo.desc}}</div>
                <div class="end"></div>
            </div>
            <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
            <div class="info-list">
                <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
            </div>
        </div>
        <!-- 商品参数展示 -->
        <div  v-if="Object.keys(paramInfo).length !== 0" class="param-info" ref="param">
            <table v-for="(table,index) in paramInfo.sizes" :key="index" class="size">
                <tr v-for="(tr,indey) in table" :key="indey">
                    <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
                </tr>
            </table>
            <table class="infoo">
                <tr v-for="(info,index) in paramInfo.infos" :key="index">
                    <td class="infoo-key">{{info.key}}</td>
                    <td class="infoo-value">{{info.value}}</td>
                </tr>
            </table>
            <div class="info-img" v-if="paramInfo.infos.length !==0">
                <img :src="paramInfo.image" alt="">
            </div>
        </div>
        <!-- 评论区域 -->
        <div class="comment-info-wrap" v-if="Object.keys(commentInfo).length !== 0" ref="comment">
		    <div class="comment-title flex">
			    <div>用户评价</div>
			    <div>更多</div>
		    </div>
	    <div v-for="comm in commentInfo" :key="comm.index">
		    <div class="comment-user-info">
			    <span><img :src="comm.user.avatar" alt="" class="avatar"></span>
			    <span>{{comm.user.uname}}</span>
		    </div>
	    <div class="comment-text">{{comm.content}}</div>
		    <div class="comment-goods-info">
			    <span class="comment-time">{{comm.created |showDate}}</span>
			    <span>{{comm.style}}</span>
		    </div>
	    <div class="flex">
		    <div class="comment-info-images" v-for="itemm in comm.images" :key="itemm.index">
			    <img :src="itemm" alt="">
		    </div>
	    </div>	
	    </div>
	    </div>
    </scroll>
    <!-- 底部栏区域 -->
        <div class="bottom-bar">
            <div class="three-item">
                <p><img src="@/assets/img/man.svg" alt="" height="22px" width="22px"></p>
                <p>客服</p>
            </div>
              <div class="three-item">
                <p><img src="@/assets/img/shop.svg" alt="" height="22px" width="22px"></p>
                <p>店铺</p>
            </div>
              <div class="three-item">
                <p><img src="@/assets/img/collect.svg" alt="" height="22px" width="22px"></p>
                <p>收藏</p>
            </div>
            <div class="shopping" @click="showit">加入购物车</div>
            <div class="buy">购买</div>
        </div>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import DetailSw from './detailChildren/DetailSw'
import DetailBaseInfo from './detailChildren/DetailBaseInfo'
import DetailShopInfo from './detailChildren/DetailShopInfo'
import DetailGoodsInfo from './detailChildren/DetailShopInfo'
import {getDetail,goods,shop,goodsParams} from '@/network/detail'
import {formatDate,debounce} from "./../../common/utils"

export default {
name:"detail",
components: {
    NavBar,
    Scroll,
    DetailSw,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
  
},
filters:{
	showDate(value){
		//将时间戳转化为data对象
		const date = new Date(value*1000)
		//将date进行格式化
		return formatDate(date,'yyyy-MM-dd hh:mm')
	}
},

data() {
//这里存放数据
return {
titles:['商品','参数','评论'],
currentIndex:0,
iid:null,
topImage:[],
title:'',
goods:{},
shop:{},
detailInfo:{},
paramInfo:{},
commentInfo:{},
topY:[],
getTopY:null,
topIndex:0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
itemClick(index){
    this.currentIndex=index
    console.log(index)
    this.$refs.scroll.scrollTo(0,-this.topY[index],100)
},
back(){
this.$router.back()
},
getDetail(iid){
    getDetail(iid).then(res=>{
        console.log(res)
        const data =res.data.result
        // console.log(data.itemInfo)
        this.topImage=data.itemInfo.topImages
        this.goods=new goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop=new shop(data.shopInfo)
        this.detailInfo=data.detailInfo
        this.paramInfo=new goodsParams(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate !== 0){
			this.commentInfo = data.rate.list
		}
    
    })
},
imgLoad(){
    this.$refs.scroll.refresh()
    this.getTopY()
     
},
currentScroll(position){
// console.log(position)
const positionY =-position.y
let length = this.topY.length
for(let i=0;i<length-1;i++){
    //方法1
    // if (this.topIndex!==i&&((i<length-1&&positionY>this.topY[i]&&positionY<this.topY[i+1])||(i===length-1&&positionY>this.topY[i]))) {
    //     this.topIndex=i
    //     this.currentIndex=this.topIndex
    // }
    //方法2
    if (this.topIndex!==i&&(positionY>=this.topY[i]&&positionY<this.topY[i+1])) {
        this.topIndex=i
        this.currentIndex=this.topIndex
    }

}
},
addCart(){
    //获取商品信息
    const product={}
    product.iid=this.iid
    product.image=this.topImage[0]
    product.title=this.goods.title
    product.price=this.goods.lowNowPrice
    product.desc=this.goods.desc
    //添加到购物车 使用vuex
    this.$store.commit('addCart',product)
},
showit(){
    this.$dialog.alert({
        //  title: "提示", //加上标题
         message: "添加购物车成功!", //改变弹出框的内容
         showCancelButton: true //展示取水按钮
})
.then(() => { //点击确认按钮后的调用
         this.addCart()
})
.catch(() => { //点击取消按钮后的调用
        
})
}
},

created() {
this.iid=this.$route.params.iid
this.getDetail(this.iid)
this.getTopY=debounce(()=>{
    //offsettop可能值不对  没有加载图片
    this.topY=[]
    this.topY.push(0)
    this.topY.push(this.$refs.param.offsetTop-44)
    this.topY.push(this.$refs.comment.offsetTop)
    this.topY.push(Number.MAX_VALUE)
    // console.log(this.topY)
},100)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    
}
}
</script>
<style lang="less" scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.detail-item{
    box-shadow: 0 1px 1px rgba(100, 100,100, 0.1); 
    position: relative;
    z-index: 19;
    background-color: #fff;
    height: 44px;
}
.titles{
    display: flex;
}
.center-item{
    color: black;
    flex: 1;
    font-size: 10px;
}
.active{
    color: red;
}
.left-item img{
    margin-top: 10px;
}
.goods{
    margin: 10px 5px;
     color: #999;
}
.goods-title{
    color: #222;
    margin-bottom: 10px;
}
.newprice{
    font-size: 24px;
    color: var(--color-high-text);
}
.oldprice{
    font-size: 14px;
    padding: 0 4px;
    text-decoration: line-through;
}
.desword{
    background-color:var(--color-high-text);
    color: white;
    font-size: 12px;
    border-radius: 8px;
    padding: 2px 5px;
}
.columns{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: gray;
}
.info-service{
    font-size: 8px;
    color:#222;
    display: flex;
    justify-content: space-between;

}
.content{
    height: calc(100% - 93px);
    
}
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
  .param-info{
      padding: 20px 15px;
      font-size:14px;
      border-bottom: 5px solid #f2f5f8;
  }
  .param-info table{
      width: 100%;
      border-collapse: collapse;
  }
  .param-info table tr {
    height: 40px;
  }
  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .infoo{
      border-top: 1px solid rgba(100,100,100,.1);
  }
  .infoo-value{
      color:#eb4868
  }
  .infoo-key{
      width: 95px;
  }
   .info-img img {
    width: 100%;
  }
  .bottom-bar{
      height: 49px;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;   
  }
  .bottom-bar .three-item{
      float: left;
      width: 16%;
      font-size: 12px;
	  color: #333;
	  text-align: center;
  }
  .bottom-bar .three-item img{
      margin: 4px 0;
      vertical-align: middle;
  }
  .bottom-bar .shopping{
      width: 26%;
      background-color: yellow;
      line-height: 49px;
      float: left;
      text-align: center;
      font-size: 13px;
  }
  .bottom-bar .buy{
      width: 26%;
      background-color: var(--color-high-text);
      line-height: 49px;
      float: left;
      color: white;
      text-align: center;
      font-size: 13px;
  }
  .comment-info-wrap {
		padding: 0 8px;
		font-size: 14px;
		border-bottom: 4px solid #ececec;
		.comment-title {
			justify-content: space-between;
			border-bottom: 1px solid #ececec;
			padding: 10px 4px;
		}
		.comment-user-info {
			padding: 10px 0;
			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 100%;
				margin-right: 10px;
				vertical-align: middle;
			}
		}
		.comment-text {
			line-height: 20px;
		}
		.comment-goods-info {
			color: #999;
			margin: 4px 0;
			.comment-time {
				margin-right: 10px;
			}
		}
		.comment-info-images {
			img{
				width: 60px;
				height: 60px;
				margin-right: 6px;
			}
		}
	}
</style>