import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isLoggedIn } from "../service/utils.service";
import NProgress from "@/assets/js/nprogress";
import { authRoutes } from "@/core/router/auth.route";
import { pageRoutes } from "@/core/router/page.route";

const ComingSoon = () => import("@/app/unit/shared/ComingSoon.vue");
const Pages = () => import("@/app/unit/pages/Pages.vue");
const news = () => import("@/app/unit/pages/NewsScreen/newsScreen.vue");
const Test = () => import("@/app/unit/shared/Test.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/pages", component: Pages },
  { path: "/news", component: news },
  { path: "/test", component: Test },
  ...authRoutes,
  ...pageRoutes,
  {
    path: "/:catchAll(.*)",
    component: ComingSoon,
    beforeEnter: [canActivatedGuard],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  isLoggedIn();
  window.scrollTo(0, 0);
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export function canActivatedGuard(to, from, next) {
  if (isLoggedIn()) {
    next();
  } else {
    next({ name: "Login" });
  }
}

export default router;
