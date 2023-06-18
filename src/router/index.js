import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// Containers
const DefaultContainer = () => import("@/containers/DefaultContainer");

// Shared Pages
const Login = () => import("@/views/Login");
const Home = () => import("@/views/Home");
const UserInfo = () => import("@/views/UserInfo");
const TicketsList = () => import("@/views/TicketsList");
const NewTicket = () => import("@/views/NewTicket");
const Photo = () => import("@/views/Photo");
const Coach = () => import("@/views/Coach");
const Sizes = () => import("@/views/Sizes");
const Finish = () => import("@/views/Finish");

export default new Router({
  mode: "history", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path:'/login',
    name:'login',
    component:Login

    },
    {
      path: "/DefaultContainer",
      name: "خانه",
      component: DefaultContainer,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home,
        },
        {
          path: "/userinfo",
          name: "UserInfo",
          component: UserInfo,
        },
        {
          path: "/ticketsList",
          name: "TicketsList",
          component: TicketsList,
        },
        {
          path: "/newticket",
          name: "NewTicket",
          component: NewTicket,
        },
        {
          path: "/photo",
          name: "Photo",
          component: Photo,
        },
        {
          path: "/coach",
          name: "Coach",
          component: Coach,
        },
        {
          path: "/sizes",
          name: "Sizes",
          component: Sizes,
        },
        {
          path: "/finish",
          name: "Finish",
          component: Finish,
        },
      ],
    },
    { path: "/", redirect: "/home" },
    // { path: "*", component: Page404 },
  ],
});
