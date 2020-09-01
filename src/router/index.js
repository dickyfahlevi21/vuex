import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.view";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.view"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.view"),
  },
  {
    path: "/dashboard-user",
    name: "User",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Dashboard/User/Index.vue"
      ),
  },
  {
    path: "/dashboard-product",
    name: "product",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Dashboard/Product/Index.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
