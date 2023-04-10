import { createRouter, createWebHistory, Router } from "vue-router";

const routes = [
  {
    name: "home-page",
    path: "/",
    redirect: { path: "/commercial-offer" },
    component: () => import("@/pages/HomePage.vue"),
    children: [
      {
        name: "commercial-offer",
        path: "commercial-offer",
        component: () => import("@/components/CommercialOffer.vue"),
      },
      {
        name: "products",
        path: "products",
        component: () => import("@/components/Products.vue"),
      },
      {
        name: "deals",
        path: "deals",
        component: () => import("@/components/Deals.vue"),
      },
      {
        name: "settings",
        path: "settings",
        component: () => import("@/components/Settings.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    name: "registration",
    path: "/registration",
    component: () => import("@/pages/RegistrationPage.vue"),
  },
];

export default routes;
