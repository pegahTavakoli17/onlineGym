// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "core-js/es6/promise";
import "core-js/es6/string";
import "core-js/es7/array";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueCountryCode from "vue-country-code";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import vuetify from "@/plugins/vuetify"; // path to vuetify export




Vue.use(VueCountryCode);
Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
});
Vue.use(Notifications);
Vue.use(Notifications, { velocity });
Vue.use(BootstrapVue);

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.19.0/bootstrap-vue-icons.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.19.0/bootstrap-vue.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
    // '/print.css' //css stylings should be add to this file in public folder
  ],
};


//repeated data and methods imported here
Vue.mixin({
  data() {
    return {
      // baseUrl: "http://192.168.1.20:5900",
      // baseUrl: "https://baas.myprogym.ir",
    };
  },
  methods: {
    toast(message, type) {
      this.$toast[type](message, {
        position: "top-center",
        icon: false,
        closeButton: false,
        timeout: 3000,
        draggablePercent: 0.2,
        hideProgressBar: true,
      });
    },
   
  },
});
//jQuery--added
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    // url: 'http://pm.sarmadbs.com/',
    // token: '6aad0847cc2ce0f4c4cb512c98be2a0a12c307ce'
  },
  router,
  template: "<App/>",
  components: {
    App,
  },
  vuetify,
  mounted() {
    // if (window.localStorage.api_key === undefined) {
    // window.location = '/#/pages/login'
    // this.router.go('/pages/login')
    // router.push({ name: 'Login' })
    //return
    // }
  },
});
