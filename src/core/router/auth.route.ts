import { RouteRecordRaw } from "vue-router";

const LoginScreen = () => import("@/app/unit/auth/login/LoginScreen.vue");
const forgotPassword = () =>
  import("@/app/unit/auth/forgotPassword/forgotpasswordScreen.vue");
const code = () => import("@/app/unit/auth/enterOtpCode.vue");
const newPassword = () =>
  import("@/app/unit/auth/forgotPassword/newPassword.vue");

export const authRoutes: Array<RouteRecordRaw> = [
  { path: "", component: LoginScreen },
  { path: "/forgotpassword", component: forgotPassword },
  { path: "/otpcode", component: code },
  { path: "/newPassword", component: newPassword },
];
