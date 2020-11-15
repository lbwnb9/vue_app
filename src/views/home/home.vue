<!--  -->
<template>
<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-sw :banners="banners"></home-sw>
    <re-view :recommends="recommends"></re-view>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSw from './homechildren/HomeSw'
import ReView from './homechildren/ReView'

import {getHomeData} from '@/network/homedata'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    NavBar,
    HomeSw,
    ReView
},
data() {
//这里存放数据
return {
banners:[],
recommends:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},

created() {
getHomeData().then(res=>{
    console.log(res);
    this.banners=res.data.data.banner.list;
    this.recommends=res.data.data.recommend.list;
    })

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},

}
</script>
<style scoped>
.home-nav{
    background-color: var(--color-text);
}

</style>