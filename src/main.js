import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


// 解决重复点击相同路由控制台报错的问题
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;
//location 点击的路由
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}