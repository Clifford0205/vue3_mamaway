import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'; //主要ＡＪＡＸ套件
import VueAxios from 'vue-axios';//將它轉為ＶＵＥ的套件
import 'bootstrap';
import router from './router/index';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
