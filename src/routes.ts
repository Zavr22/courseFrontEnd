import HomePage from "@/pages/HomePage.vue";
import Products from "@/modules/products/components/Products.vue";
import Monitors from "@/modules/products/components/Monitors.vue";
import Projectors from "@/modules/products/components/Projectors.vue";
import VideoWalls from "@/modules/products/components/VideoWalls.vue";
import Mounts from "@/modules/products/components/Mounts.vue";
import LoginPage from "@/modules/login/pages/LoginPage.vue";
import RegistrationPage from "@/modules/registration/pages/RegistrationPage.vue";
import CommercialOffer from "@/modules/commercial-offer/components/CommercialOffer.vue";
import Deals from "@/modules/deals/components/Deals.vue";
import DetailDeal from "@/modules/deals/components/DetailDeal.vue";
import Settings from "@/modules/settings/components/Settings.vue";

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
          {
            name: "product-projectors",
            path: "projectors",
            component: Projectors,
          },
          {
            name: "product-videowalls",
            path: "videowalls",
            component: VideoWalls,
          },
          {
            name: "product-mounts",
            path: "mounts",
            component: Mounts,
          },
        ],
      },
      {
        name: "deals",
        path: "deals",
        component: Deals,
        children: [
          {
            name: "deal-detail",
            path: ":id",
            component: DetailDeal,
          },
        ],
      },
      { name: "settings", path: "settings", component: Settings },
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
