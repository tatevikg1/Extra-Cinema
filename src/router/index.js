import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import ECHome from "@/views/cinema/Home"; // EC - Extra Cinema
import ECForHalls from "@/views/cinema/ForHalls";
import ECUploadDocs from "@/views/cinema/UploadDocs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cinema",
    name: "ec-home", //extra cinema home-page
    component: ECHome,
  },
  {
    path: "/cinema/for-halls",
    name: "for-halls", //extra cinema for-hall-page
    component: ECForHalls,
  },
  {
    path: "/cinema/for-halls/upload-docs",
    name: "upload-docs", //extra cinema for-hall-upload-docs-page
    component: ECUploadDocs,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
