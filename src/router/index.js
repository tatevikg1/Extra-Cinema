import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
// EC - Extra Cinema
import ECHome from "@/views/cinema/Home";
import ECForHalls from "@/views/cinema/ForHalls";
import ECUploadDocs from "@/views/cinema/UploadDocs";
import ECOrderEquipment from "@/views/cinema/OrderEquipment";
import ECOrderEquipmentPay from '@/views/cinema/OrderEquipmentPay';
import ECDashboard from '@/views/cinema/Dashboard';
import ECForHolders from '@/views/cinema/ForHolders';
import ECRating from '@/views/cinema/Rating';
import ECAuth from '@/views/cinema/Auth';
import ECUploadNew from '@/views/cinema/UploadNew';

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
  {
    path: "/cinema/for-halls/order-equipment",
    name: "order-equipment",
    component: ECOrderEquipment
  },
  {
    path: "/cinema/for-halls/order-equipment/pay",
    name: "order-equipment-pay",
    component: ECOrderEquipmentPay
  },
  {
    path: "/cinema/dashboard",
    name: "dashboard",
    component: ECDashboard
  },
  {
    path: '/cinema/forHolders',
    name: 'for-holders',
    component: ECForHolders
  },
  {
    path: '/cinema/forHolders/rating',
    name: 'ec-rating',
    component: ECRating
  },
  {
    path: '/login',
    name: 'ec-login',
    component: ECAuth
  },
  {
    path: '/cinema/forHolders/upload-new',
    name: 'ec-upload',
    component: ECUploadNew
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
