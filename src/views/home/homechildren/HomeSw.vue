<!--  -->
<template>
<div class="banners">
    <swiper>
		<swiper-item v-for="item in banners" :key="item.index">
			<a :href="item.link">
				<img :src="item.image">
			</a>
		</swiper-item>
	</swiper>
</div>
</template>

<script>
import {swiper, SwiperItem} from '@/components/common/swiper/index';

export default {
//import引入的组件需要注入到对象中才能使用
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
components: {
    swiper,
    SwiperItem
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

</style>