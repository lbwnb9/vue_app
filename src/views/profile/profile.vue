<!--  -->
<template>
<div class="profile">
        <div class="profile-photo">
                <span class="head" @click="login"><img src="@/assets/img/headphoto.svg" alt="" >登录/注册 ></span>
                <span class="setting" @click="setting"><img src="@/assets/img/setting.svg" alt="" ></span>
        </div>
        <scroll class="content">
        <div class="first-grid">
                <div class="quarter-div">
                        <div class="word">
                        <p style="font-size:14px; color:black">会员中心</p>
                        <p style="font-size:10px; color:orange">体验饿了么会员</p>
                        </div>
                        <img src="@/assets/img/vip.svg" alt="" height="24px" width="24px">
                </div>
                <div class="quarter-div">
                          <div class="word">
                        <p style="font-size:14px; color:black">淘宝省钱卡</p>
                        <p style="font-size:10px; color:orange">领91元红包</p>
                        </div>
                        <img src="@/assets/img/card.svg" alt="" height="24px" width="24px">
                </div>
                <div class="quarter-div">
                          <div class="word">
                        <p style="font-size:14px; color:black">淘宝人生</p>
                        <p style="font-size:10px; color:orange">免费抽稀有套装</p>
                        </div>
                        <img src="@/assets/img/mann.svg" alt="" height="24px" width="24px">
                </div>
                <div class="quarter-div">
                          <div class="word">
                        <p style="font-size:14px; color:black">免费领水果</p>
                        <p style="font-size:10px; color:orange">2亿人都在参与</p>
                        </div>
                        <img src="@/assets/img/fruit.svg" alt="" height="24px" width="24px">
                </div>
        </div>
        <div class="second-grid">
                <div class="second-grid-item">
                <span style="color:black;">我的订单</span>
                <span style="font-size:12px;" @click="pushTo">查看全部订单 ></span>
                </div>
           
              <van-grid square :border="false"> 
                <van-grid-item icon="paid" text="待付款" />
                <van-grid-item icon="send-gift-o" text="待发货" />
                <van-grid-item icon="logistics" text="待收货" />
                <van-grid-item icon="refund-o" text="退款/售后" />
        </van-grid>  
        </div>
        <div class="third-grid">
                <img src="@/assets/img/hongbao.jpg" alt="">
        </div>
        <div>
                <span style="margin-left:10px;color:black">我关注的频道</span>
                <span style="float:right; margin-right:10px">去关注更多 ></span>
        </div>
        <div class="fourth-grid">
                <div class="fourth-grid-item">
                        <div class="img-span">
                        <img src="@/assets/img/zfb.svg" alt="">
                        <span style="font-size:14px">支付宝</span>
                        </div>   
                        <div style="font-size:10px; margin:10px">生活好支付宝</div>
                        <div class="fourth">
                                 <div class="fourth-h2">
                                <p>花呗额度</p>
                                </div>
                               <div class="fourth-h2 dd" @click="check">
                                       查询额度
                                </div>    
                        </div>
                         <van-grid :column-num="2" :border="false">
                                <van-grid-item icon="hot" text="积分兑换"  />
                                <van-grid-item icon="user-o" text="查看服务" />
                        </van-grid> 
                               
                </div>
                <div class="fourth-grid-item">
                        <div class="last">精选频道</div>
                        <div style="font-size:12px; margin:10px">大家常逛的频道</div>
                        <div>
                                 <div class="last-item">
                                        <img src="@/assets/img/eat.svg" alt="">
                                        <span style="font-size:14px ">淘宝吃货</span>
                                        <p>领粮票枪鸡蛋</p>
                                </div>
                                 <div class="last-item">
                                        <img src="@/assets/img/baby.svg" alt="">
                                        <span style="font-size:14px">亲宝贝</span>
                                        <p>陪伴宝宝每一天</p>
                                </div>
                                 <div class="last-item">
                                        <img src="@/assets/img/food.svg" alt="">
                                        <span style="font-size:14px">汇吃</span>
                                        <p>陶遍新奇有趣美味</p>
                                </div>
                                 <div class="last-item">
                                        <img src="@/assets/img/beautiful.svg" alt="">
                                        <span style="font-size:14px">美妆学院</span>
                                        <p>Pick适合你的美</p>
                                </div>
                        </div>
                       
                        <div class="dd">前往频道广场</div>
                </div>
        </div>
        </scroll>
</div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'


export default {
//import引入的组件需要注入到对象中才能使用
components: {
        Scroll
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
login(){
console.log('进入登录界面')
},
setting(){
console.log('进入设置界面')
},
pushTo(){     
this.$router.push('/cart')
},
check(){
console.log('查询额度')
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.profile{
        height: 100vh;
        background-color:#e3e3e3;
        
}
.content{
        height: calc(100% - 115px - 59px);
        overflow: hidden;
}
.profile-photo{
        height: 115px;
        background-color:var(--color-high-text);
        display: flex;
        justify-content:space-between;
        z-index: 10;
        margin-bottom: 10px;
}
.head,.setting{
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
}
.head img{
       height: 50px;
       width: 50px; 
       margin-right: 10px; 
}
.profile-photo span{
        
        color: white;
        margin-left: 10px;     
}
.setting img{
        height: 20px;
        width: 20px;       
}
.first-grid{
        background-color: #fff;
        height:120px;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        margin-top:10px
}
.quarter-div{
            width: 50%;
            height: 50%;
            float: left;
            display: flex;
             justify-content:space-between;
        align-items: center;
 }
 .quarter-div .word{
         margin-left: 10px;
 }
 .quarter-div img{
         margin-right: 5px;
 }
.third-grid,.second-grid{
        background-color: #fff;
        height:120px;
        margin: 10px;
        border-radius: 10px; 
}

.second-grid-item{
        font-size: 14px;
        display: flex;
        justify-content:space-between;
       padding: 10px;
       border-bottom:1px solid #e3e3e3;
}
.third-grid img{
        padding-top: 11px;
        height: 100px;
        width: 280px;
        margin-left: 10px;
}
.fourth-grid{
        display:flex;
        justify-content: space-between;
}
.fourth-grid-item{
        background-color: #fff;
        height:330px;
        margin: 10px;
        border-radius: 10px; 
        width: 45%;
        
}
.img-span{
        margin: 10px;
        color: black;
        font-size: 10px;
}
.fourth-grid-item img{
        width: 20px;
        margin-right: 5px;
}
.fourth{
        background-color: #e3e3e3;
        height: 160px;
        margin: 10px;
}
.fourth-h2{
        display: flex;
        justify-content: center;
        align-items: center;   
}
.fourth p{
/* text-align: center;        */
margin-top: 50px;
color: blue;         
}
.dd{
        background-color: yellow;
        margin-top: 20px;
        margin-left: 30px;
        margin-right: 30px;
        font-size: 12px;
        border-radius: 10px;
}
.last{
        margin: 10px;
        color: black;
}
.last-item{
        margin: 15px;
}
.last-item p{
        font-size: 10px;
}
.last-item span{
        color: black;
}
</style>