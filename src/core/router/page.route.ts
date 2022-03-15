import { RouteRecordRaw } from "vue-router";
import { canActivatedGuard } from "@/core/router/router";

const Pages = () => import("@/app/unit/pages/Pages.vue")


export const pageRoutes: Array<RouteRecordRaw> = [
    { path: '/pages', component: Pages, beforeEnter: [canActivatedGuard] },

]
