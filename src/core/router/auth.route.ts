import { RouteRecordRaw } from "vue-router";

const LoginScreen = () => import('@/app/unit/auth/login/LoginScreen.vue');

export const authRoutes: Array<RouteRecordRaw> = [
    { path: '/login', component: LoginScreen }
]
