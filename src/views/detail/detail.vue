<!--  -->
<template>
<div id="detail">
    <nav-bar class="detail-item">
        <div slot="left" class="left-item" @click="back">
            <img src="@/assets/img/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" :key="item.index" class="center-item" 
            :class="{active:index===currentIndex}"
            @click="itemClick(index)"
            >{{item}}</div>
            
        </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
components: {
    NavBar
},
data() {
//这里存放数据
return {
titles:['商品','参数','评论','推荐'],
currentIndex:0,
iid:null
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
},
back(){
this.$router.back()
}
},

created() {
this.iid=this.$route.params.iid
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},

}
</script>
<style scoped>
.detail-item{
    box-shadow: 0 1px 1px rgba(100, 100,100, 0.1); 
}
.title{
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
</style>