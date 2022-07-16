import { RouteRecordRaw } from "vue-router";

const LoginScreen = () => import("@/app/unit/auth/login/LoginScreen.vue");
const forgotPassword = () =>
  import("@/app/unit/auth/forgotPassword/forgotpasswordScreen.vue");
const code = () => import("@/app/unit/auth/enterOtpCode.vue");
const newPassword = () =>
  import("@/app/unit/auth/forgotPassword/newPassword.vue");
const signup = () => import("@/app/unit/auth/signUp/signScreen.vue");
const Pages = () => import("@/app/unit/pages/Pages.vue");

export const authRoutes: Array<RouteRecordRaw> = [
  { path: "", component: Pages },
  { path: "/login", component: LoginScreen },
  { path: "/forgotpassword", component: forgotPassword },
  { path: "/otpcode", component: code },
  { path: "/newPassword", component: newPassword },
  { path: "/signup", component: signup },
  { path: "/login", component: LoginScreen },
];
