import Router from "vue-router";
import Vue from "vue";
import LandingPage from "./Pages/LandingPage.vue";
import Register from "./Pages/Register.vue";
import Home from "./Pages/Home";
import Transfer from "./Pages/Transfer";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: LandingPage },

    {
      path: "/Register",
      component: Register,
    },
    {
      path: "/home/:id",
      component: Home,
    },
    {
      path: "/transfer",
      component: Transfer,
      children: [
        {
          path: "withinSameUser",
          component: () => import("./components/WithinSameUser"),
        },
        {
          path: "toAnotherAccount",
          component: () => import("./components/toAnotherAccount"),
        },
      ],
    },
    {
      path: "/loan",
      component: () => import("./Pages/Loan"),
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
