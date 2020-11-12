import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/home/home.vue')
const cate = () => import('../views/category/cate.vue')
const shopping = () => import('../views/shoppingcart/shopping.vue')
const profile = () => import('../views/profile/profile.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component:home
      },
      {
        path:'/sort',
        component:cate
      },
      {
        path:'/cart',
        component:shopping
      },
      {
        path:'/my',
        component:profile
      }
  ]
})
