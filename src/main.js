import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import Vant from 'vant';
// import { Button } from 'vant';
// import { Dialog } from 'vant' ;
// import { SubmitBar } from 'vant';
// import { Empty } from 'vant';
import 'vant/lib/index.css';
// Vue.use(Button);
// Vue.use(Dialog);
// Vue.use(Empty);
// Vue.use(SubmitBar);
Vue.use(Vant);



    
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
