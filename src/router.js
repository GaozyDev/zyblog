import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/index";
import Home from "./pages/home";
import Works from "./pages/works";
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
        {
          path: "/works",
          name: "works",
          component: Works,
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
