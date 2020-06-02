import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/index";
import Home from "./pages/home";
import NCEE from "./pages/NCEE";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
      ],
    },
    {
      path: "/NCEE",
      name: "NCEE",
      component: NCEE,
    },
  ],
});
