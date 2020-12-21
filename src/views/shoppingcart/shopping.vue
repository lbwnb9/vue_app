<!--  -->
<template>
<div class="shopping">
    <!-- 导航栏 -->
   <nav-bar class="shopping-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
   <!-- 商品列表 -->
   
   <scroll class="content">
    <div v-if="this.cartLength!==0">
    <div v-for="(item,index) in cartList" :key="item.iid" class="shop-item">
        <div class="item-button">
            <div class="check-button" :class="{check: item.checked}" @click="change(index)" >
                <img src="@/assets/img/tick.svg" alt="">
            </div>
        </div>
        <div class="goods-img">
            <img :src="item.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
            <div class="item-bottom">
                <div class="item-price left">￥{{item.price}}</div>
                <div class="item-count right">X{{item.count}}</div>
            </div>
        </div>
    </div>
    </div>
    <van-empty v-else description="购物车是空的" />
    </scroll>
   <!-- 汇总 -->
   <div class="all-bottom">
    <div class="bottom-left">
        <div class="left-check">
            <div class="check-button" :class="{check:allSelect}" @click="selectAll">
                <img src="@/assets/img/tick.svg" alt="">
            </div>
            <span>全选</span>
        </div>  
    </div>
    <div class="bottom-center">
        合计:{{totalPrice}}
    </div>
    <div class="calc" @click="statement">
        去结算:({{totalCart}})
    </div>
   </div>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
// import CheckButton from '@/components/content/checkbutton/CheckButton.vue'
// import CartList from './cartchildren/CartList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
export default {

components: {
    NavBar,
    Scroll,
    // CartList,
    // CheckButton
},
data() {
return {

   
};
},

computed: {
    cartLength(){
        return this.$store.state.cartList.length
    },
    cartList(){
		return this.$store.state.cartList;
    },
    totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item=>{
            return item.checked
        }).reduce((preValue,item)=>{
            return item.price*item.count + preValue
        },0).toFixed(2)//保留两位小数
    },
    totalCart(){
        return this.$store.state.cartList.filter(item=>item.checked).length
    } ,
    allSelect(){
        if (this.$store.state.cartList.length===0) {
            return false
        }else{
            return ! this.$store.state.cartList.find(item=>!item.checked)
        }
    },
  
},

methods: {
change(index){
    this.$store.state.cartList[index].checked = !this.$store.state.cartList[index].checked
},
 selectAll(){
      console.log(this.allSelect)
      if (this.allSelect) {
          this.cartList.forEach(element => {element.checked=false});
      }else{
          this.cartList.forEach(element => {element.checked=true});
      }
},
statement(){
    this.$router.push('/statement')
}

},

created() {

},

mounted() {

},

}
</script>
<style scoped>
.content{
    height: calc(100% - 93px - 40px);
    overflow: hidden;
}
.shopping{
    height: 100vh;
}
.shopping-nav{
     background-color: var(--color-text);
     z-index: 10;
}
.shop-item{
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ececec;
}
.item-button{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.goods-img{
    padding-left: 5px;
}
.goods-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.item-info{
    font-size: 14px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-info .item-desc{
    font-size: 12px;
    color: #666;
    margin-top: 15px;
}
.item-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content:space-between;
}
.item-bottom .item-price{
    color: yellow;
    float: left;
}
.item-count{
    float: left;
    width: auto;
}
.check-button{
    border-radius: 50%;
    height: 16px;
    border: 2px solid #aaa;
    width: 16px;
    line-height: 16px;
}
.check{
    background-color: var(--color-high-text);
    border-color:var(--color-high-text);
}
.all-bottom{
    background-color: #eee;
    height: 40px;
    position: relative;
    display: flex;
    font-size: 13px;
}
.bottom-left{
    margin-left: 5px;
    /* float: left; */
    width: 60px;
}
.left-check{
    display: flex;
    align-items: center;
    line-height: 40px;
}
.left-check span{
    margin-left: 5px;
}
.bottom-center{
    /* float: left; */
    line-height: 40px;
    margin-left: 10px;
    flex: 1;
    text-align: center;
}
.calc{
    line-height: 40px;
    width: 90px;
    background-color: red;
    color: white;
    text-align: center;
}
</style>