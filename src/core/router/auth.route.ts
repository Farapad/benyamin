import { RouteRecordRaw } from "vue-router";

const LoginScreen = () => import("@/app/unit/auth/login/LoginScreen.vue");
const forgotPassword = () =>
  import("@/app/unit/auth/forgotPassword/forgotpasswordScreen.vue");
const code = () => import("@/app/unit/auth/enterOtpCode.vue");

export const authRoutes: Array<RouteRecordRaw> = [
  { path: "/login", component: LoginScreen },
  { path: "/forgotpassword", component: forgotPassword },
  { path: "/otpcode", component: code },
];
