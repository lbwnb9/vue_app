<!--  -->
<template>
<div class='goodslist' @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <!-- <span><img src="@/assets/img/collect.svg" alt="" height="14px"></span> -->
        <span class="collect">
            {{goodsItem.cfav}}
            </span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
    goodsItem:{
        type:Object,
        default(){
            return {}
        }
    }
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
imgLoad(){
    //使用事件总线的方法
    this.$bus.$emit('imgLoad')
},
itemClick(){
    //跳转到详情页
    this.$router.push('/detail/'+this.goodsItem.iid)
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},

}
</script>
<style  scoped>
.goodslist{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goodslist img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left:0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect{
    position: relative;
}
/* .goods-info img{
    width: 14px;
    top: 5px;
    
} */
.goods-info .collect::before{
    content: "";
    position: absolute;
    left: -11px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(collect.svg) 0 0/14px 14px;
}
</style>