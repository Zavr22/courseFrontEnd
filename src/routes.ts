import {createRouter, createWebHistory, Router} from "vue-router";
import pages from "@/pages/index";

const routes: Array<any> = [
    {
        path: "/",
        component: pages.HomePage
    },
    {
        path: "/login",
        component: pages.LoginPage
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;