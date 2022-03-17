import { RouteRecordRaw } from "vue-router";
import { canActivatedGuard } from "@/core/router/router";

const Pages = () => import("@/app/unit/pages/Pages.vue");
const About = () => import("@/app/unit/pages/About-US/aboutus.vue");

export const pageRoutes: Array<RouteRecordRaw> = [
  { path: "/pages", component: Pages, beforeEnter: [canActivatedGuard] },
  { path: "/about", component: About },
];
