import Vue from "vue";
import Vuex from "vuex";
import program from "./modules/program";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    program,
  },
});
