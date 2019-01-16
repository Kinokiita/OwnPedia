import Vue from "vue";
import Router from "vue-router";
import mincss from "mini.css";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/Home.vue").default // load sync home
    },
    {
      path: "/about-us",
      name: "about",
      meta: { layout: "no-sidebar" },
      component: () => import("@/pages/About.vue")
    },
    {
      path: "/story/:id",
      name: "post",
      component: () => import("@/pages/Post.vue")
    },
    {
      path: "/terms-of-service",
      name: "TermsOfService",
      meta: { layout: "no-sidebar" },
      component: () => import("@/pages/TermsOfService.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
});