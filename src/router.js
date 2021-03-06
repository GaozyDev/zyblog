import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/index";
import Home from "./pages/home";
import Work from "./pages/work";
import BlogList from "./pages/blogList";
import BlogDetail from "./pages/blogDetail"
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
          path: "/work",
          name: "work",
          component: Work,
        },
        {
          path: "/blog",
          name: "blog",
          component: BlogList,
        },
        {
          path: '/blog/:id',
          name: 'blog-detail',
          component: BlogDetail,
        }
      ],
    },
    {
      path: "/NCEE",
      name: "NCEE",
      component: NCEE,
    },
  ],
});
