import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

// 接口错误拦截
axios.interceptors.response.use(
  function(response) {
    let res = response.data;
    if (res.code == 200) {
      return res.data;
    } else {
      return Promise.reject(res);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
