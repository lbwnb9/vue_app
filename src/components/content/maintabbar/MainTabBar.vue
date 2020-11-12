<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<template #item-icon>
				<img src="@/assets/img/home.svg" alt="">
			</template>
			<template #item-icon-active>
				<img src="@/assets/img/home_active.svg" alt="">
			</template>
			<template #item-text>
				<div>主页</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/sort">
			<template #item-icon>
				<img src="@/assets/img/classify .svg" alt="">
			</template>
			<template #item-icon-active>
				<img src="@/assets/img/classify_active.svg" alt="">
			</template>
			<template #item-text>
				<div>分类</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="cart">
			<template #item-icon>
				<img src="@/assets/img/shoppingcart.svg" alt="">
			</template>
			<template #item-icon-active>
				<img src="@/assets/img/shopping_active.svg" alt="">
			</template>
			<template #item-text>
				<div>购物车</div>
			</template>
		</tab-bar-item>
		<tab-bar-item path="/my">
			<template #item-icon>
				<img src="@/assets/img/mine.svg" alt="">
			</template>
			<template #item-icon-active>
				<img src="@/assets/img/mine_active.svg" alt="">
			</template>
			<template #item-text>
				<div>我的</div>
			</template>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from "@/components/common/tabbar/TabBar.vue"
	import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>