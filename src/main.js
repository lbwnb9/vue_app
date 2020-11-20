import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// import ElementUI from 'element-ui';
// import Vuetify from 'vuetify'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

    
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  
  router,
  render: h => h(App)
}).$mount('#app')
