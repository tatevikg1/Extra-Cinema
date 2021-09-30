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
import ECЕTodayCinema from '@/views/cinema/TodayCinema';
import ECЕTodayCinemaSingle from '@/views/cinema/TodayCinemaSingle';
import ECMyFilmsEmpty from '@/views/cinema/MyFilmsEmpty'
import ECMyFilms from '@/views/cinema/MyFilms'
import ECMyFilmsSingle from '@/views/cinema/MyFilmsSingle'
import ECDocuments from '@/views/cinema/Documents'
import ECSeance from '@/views/cinema/Seance';
// middleware
import auth from '@/middleware/auth';
import guest from '@/middleware/guest';


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
    component: ECDashboard,
    meta: {
      middleware: [auth],
    },

  },
  {
    path: '/cinema/seance/:id',
    name: 'ec-seance',
    component: ECSeance,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/cinema/test-seance/:id',
    name: 'ec-test-seance',
    component: ECSeance,
    meta: {
      middleware: [auth],
    },
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
    component: ECAuth,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: '/cinema/forHolders/upload-new',
    name: 'ec-upload',
    component: ECUploadNew,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/cinema/forHolders/today-cinema',
    name: "ec-today",
    component: ECЕTodayCinema
  },
  {
    path: '/cinema/forHolders/today-cinema/info',
    name: 'ec-today-item',
    component: ECЕTodayCinemaSingle
  },
  {
    path: '/cinema/forHolders/add-film',
    name: 'ec-myfilms-add',
    component: ECMyFilmsEmpty
  },
  {
    path: '/cinema/forHolders/my-films',
    name: 'ec-myfilms',
    component: ECMyFilms
  },
  {
    path: '/cinema/forHolders/my-films/info/:id',
    name: 'ec-myfilms-single',
    component: ECMyFilmsSingle
  },
  {
    path: '/cinema/forHolders/my-films/info/retired/:id',
    name: 'ec-myfilms-single-retired',
    component: ECMyFilmsSingle
  },
  {
    path: "/cinema/forHolders/documents",
    name: "ec-documents",
    component: ECDocuments
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

export default router;
