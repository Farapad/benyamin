import { RouteRecordRaw } from "vue-router";
import { canActivatedGuard } from "@/core/router/router";

const Pages = () => import("@/app/unit/pages/Pages.vue");
const courses = () => import("@/app/unit/pages/courses/coursesScreen.vue");
const About = () => import("@/app/unit/pages/About-US/aboutus.vue");
const Applicant = () =>
  import("@/app/unit/pages/ApplicantScreen/Applicant.vue");

export const pageRoutes: Array<RouteRecordRaw> = [
  { path: "/pages", component: Pages, beforeEnter: [canActivatedGuard] },
  { path: "/courses", component: courses },
  { path: "/about", component: About },
  { path: "/Applicant", component: Applicant },
];
