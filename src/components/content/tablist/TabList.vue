<!--  -->
<template>
<div class='tab-list'>
    <div v-for="(item,index) in titles" 
        :key="item.index" 
        class="tab-list-item" 
        :class="{active:index===listIndex}"
        @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
props:{
    titles:{
        type:Array,
        default(){
            return []
        }
    }
},
data(){
    return{
        listIndex:0
    }
},
methods:{
    itemClick(index){
        this.listIndex=index
        this.$emit('tabClick',index)
    }
}
}
</script>
<style scoped>
.tab-list{
display: flex;
text-align: center;
font-size: 14px;
height: 40px;
line-height: 40px;
}
.tab-list-item{
    flex: 1;
}
.tab-list-item span{
    padding-bottom:3px ;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom:3px solid var(--color-high-text);
}
</style>