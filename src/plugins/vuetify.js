import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Home from "./../components/icons/Home.vue";
import Person from "./../components/icons/Person.vue";
import SmallPlus from "./../components/icons/SmallPlus.vue";
import SmallMinus from "../components/icons/SmallMinus.vue";
import Sun from "./../components/icons/Sun.vue";
import Ticket from "./../components/icons/Ticket.vue";
import LoginPic from "./../components/icons/LoginPic.vue";
Vue.use(Vuetify);

const opts = {};

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        bgColor: "#f1f1f1",
        cardColor: "#fff",
        primary: "#f1612c",
        secondary: "#2c2c2c",
      },
      dark: {
        bgColor: "#121212",
        cardColor: "#3b3b3b",
        primary: "#f1612c",
        secondary: "#2c2c2c",
      },
    },
  },
  icons: {
    iconfont: "mdi",
    values: {
      Person: {
        component: Person,
      },
      SmallPlus: {
        component: SmallPlus,
      },
      SmallMinus: {
        component: SmallMinus,
      },
      Home: {
        component: Home,
      },
      Sun: {
        component: Sun,
      },
      Ticket: {
        component: Ticket,
      },
      LoginPic: {
        component: LoginPic,
      },
    },
  },
  rtl: true,
});
