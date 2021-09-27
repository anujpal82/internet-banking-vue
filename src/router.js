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
      children: [
        { path: 'applyforloan', component: () => import('./components/ApplyForLoan') },
        {
          path: 'showloans', component: () => import('./components/Showloans.vue')
        }
      ]
    },
    {
      path: '/services',
      component: () => import('./Pages/Services'),
      children: [{
        path: 'applyforcheckbook', component: () => import('./components/CheckBookRequest')
      },
    {
      path:'applyfordebitcard',component:()=>import('./components/DebitCardRequest')
    },
  {
    path:'applyforfixeddeposit',component:()=>import('./components/FixedDeposit')
  }]
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
