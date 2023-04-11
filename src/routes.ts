import HomePage from "@/pages/HomePage.vue";
import Products from "@/components/Products.vue";
import Monitors from "@/components/Monitors.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";

const routes = [
  {
    name: "home-page",
    path: "/",
    // redirect: { path: "/commercial-offer" },
    component: HomePage,
    children: [
      {
        name: "products",
        path: "products",
        component: Products,
        children: [
          {
            name: "product-monitors",
            path: "monitors",
            component: Monitors,
          },
        ],
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "registration",
    path: "/registration",
    component: RegistrationPage,
  },
];

export default routes;
