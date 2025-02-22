import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/coffee",
      name: "coffee",
      component: () => import("../views/CoffeeView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductView.vue"),
    },
    {
      path: "/todos",
      name: "todos",
      component: () => import("@/views/TodoView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/contacts/list",
      name: "contactsList",
      component: () => import("@/views/ContactListView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/TestView.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("@/views/TeamView.vue"),
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("@/views/CustomerView.vue"),
    },
  ],
});

export default router;
