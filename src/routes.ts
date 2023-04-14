import HomePage from "@/pages/HomePage.vue";
import Products from "@/components/Products.vue";
import Monitors from "@/components/Monitors.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import CommercialOffer from "@/modules/commercial-offer/components/CommercialOffer.vue";

const routes = [
  {
    name: "home-page",
    path: "/",
    redirect: { path: "/commercial-offer" },
    component: HomePage,
    children: [
      {
        name: "commercial-offer",
        path: "commercial-offer",
        component: CommercialOffer,
      },
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
