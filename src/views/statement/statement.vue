<!--  -->
<template>
<div>
    <div class="statement">
        <nav-bar class="state-nav">
            <div slot="left" class="left-item" @click="back">
            <img src="@/assets/img/back.svg" alt="">
            </div>
            <div slot="center">订单结算</div></nav-bar>
    </div>
    <div class="totalprice">￥{{totalPrice}}</div>
    <div class="pay">
        <div class="vx-py">
            <img src="@/assets/img/wxpy.svg" alt="">
            微信支付
        </div>
        <div class="zfb-py">
            <img src="@/assets/img/zfbpy.svg" alt="">
            支付宝支付
        </div>
        <div class="cloud-py">
            <img src="@/assets/img/yhpy.svg" alt="">
            云闪付
        </div>
    </div>
    <van-submit-bar button-text="确认付款" :price="this.totalPrice*100"/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar,
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    totalPrice(){
        return  this.$store.state.cartList.filter(item=>{
            return item.checked
        }).reduce((preValue,item)=>{
            return item.price*item.count + preValue
        },0).toFixed(2)//保留两位小数
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
back(){
    this.$router.push('/cart')
    console.log(typeof(this.totalPrice*10))
},

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},

}
</script>
<style scoped>
.statement{
    /* background-color:#e3e3e3; */
}
.state-nav{
    color: black;
    box-shadow: 0 1px 1px rgba(100, 100,100, 0.1); 
}
.left-item img{
   margin-top: 10px;
}
.totalprice{
    width: 100%;
    height: 16%;
    /* background-color:white; */
    background-color:#e3e3e3;
    line-height: 100px;
    text-align: center;
    font-size: 25px;
    color: red;
    }
.vx-py,.zfb-py,.cloud-py{
    height: 40px;
    box-shadow: 0 1px 1px rgba(100, 100,100, 0.1); 
    line-height: 40px;
    /* margin-top: 5px; */
}
.vx-py img,.zfb-py img,.cloud-py img {
    height: 20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    vertical-align: middle;
}
</style>