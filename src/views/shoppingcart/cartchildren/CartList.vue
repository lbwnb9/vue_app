<template>
	<div class="cart-list-wrap">
		<cart-list-item :cart-list="cartList"></cart-list-item>
	</div>
</template>

<script>
	import CartListItem from './CartListItem.vue'
	export default {
		name: "CartList",
		computed: {
			cartList() {
				return this.$store.state.cartList;
			}
		},
		components:{
			CartListItem
		}
	}
</script>