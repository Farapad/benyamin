import { RouteRecordRaw } from "vue-router";
import { canActivatedGuard } from "@/core/router/router";

const Pages = () => import("@/app/unit/pages/Pages.vue");
const courses = () => import("@/app/unit/pages/courses/coursesScreen.vue");
const About = () => import("@/app/unit/pages/About-US/aboutus.vue");
const Applicant = () =>
  import("@/app/unit/pages/ApplicantScreen/Applicant.vue");
const ApplicantDetails = () =>
  import("@/app/unit/pages/ApplicantScreen/ApplicantDetails.vue");
const mylessons = () =>
  import("@/app/unit/pages/myLessonsScreen/MyLessons.vue");
const admin = () => import("@/app/unit/pages/AdminScreen/admin.vue");
const listScreen = () =>
  import("@/app/unit/pages/managementscreen/listScreen.vue");
const TeacherScreen = () => import("@/app/unit/pages/Teacher/mainScreen.vue");
const Details = () =>
  import("@/app/unit/pages/Teacher/detailsLesson/DetailsLesson.vue");
const TeacherLesson = () =>
  import("@/app/unit/pages/Teacher/Teacherlessons/TeacherScreen.vue");
const Certificate = () =>
  import("@/app/unit/pages/Teacher/Certificate/CertificateScreen.vue");
const Management = () =>
  import("@/app/unit/pages/managementscreen/Management.vue");

export const pageRoutes: Array<RouteRecordRaw> = [
  { path: "/pages", component: Pages, beforeEnter: [canActivatedGuard] },
  { path: "/courses", component: courses },
  { path: "/about", component: About },
  { path: "/Applicant", component: Applicant },
  { path: "/Applicant/details", component: ApplicantDetails },
  { path: "/pervasive", component: mylessons },
  { path: "/admin", component: admin },
  { path: "/management/list", component: listScreen },
  { path: "/management", component: Management },
  {
    path: "/Teacher",
    component: TeacherScreen,
  },
  {
    path: "/Teacher/Details",
    component: Details,
  },
  {
    path: "/Teacher/Lessons",
    component: TeacherLesson,
  },
  {
    path: "/Teacher/Certificate",
    component: Certificate,
  },
];
