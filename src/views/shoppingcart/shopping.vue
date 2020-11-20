<!--  -->
<template>
<div>
   <nav-bar class="shopping-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {

components: {
    NavBar,
},
data() {
return {

};
},

computed: {
    cartLength(){
        return 
    }
},

methods: {

},

created() {

},

mounted() {

},

}
</script>
<style scoped>
.shopping-nav{
     background-color: var(--color-text);
}
</style>