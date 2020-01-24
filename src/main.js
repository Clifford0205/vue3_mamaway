import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import axios from 'axios'; //主要ＡＪＡＸ套件
import VueAxios from 'vue-axios';//將它轉為ＶＵＥ的套件
import 'bootstrap';
import router from './router/index';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
