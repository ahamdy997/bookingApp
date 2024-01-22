import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/layouts/HomeLayout/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/layouts/AboutLayout/AboutView.vue"
      ),
  },
  {
    path: "/register",
    name: "register",

    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/views/layouts/RegisterLayout/RegisterView.vue"
      ),
  },
  {
    path: "/sign-in",
    name: "sign-in",

    component: () =>
      import(
        /* webpackChunkName: "sign-in" */ "@/views/layouts/SignInLayout/SignInView.vue"
      ),
  },
  {
    path: "/search",
    name: "search",

    component: () =>
      import(
        /* webpackChunkName: "sign-in" */ "@/views/layouts/SearchLayout/SearchView.vue"
      ),
  },
  {
    path: "/hoteldetails",
    name: "hoteldetails",

    component: () =>
      import(
        /* webpackChunkName: "shotel-details" */ "@/views/layouts/HotelDetailsLayout/HotelDetailsView.vue"
      ),
  },
  {
    path: "/payement",
    name: "payement",

    component: () =>
      import(
        /* webpackChunkName: "Payement" */ "@/views/layouts/HotelDetailsLayout/HotelDetailsView.vue"
      ),
  },

  {
    path: "/:notfound(.*)",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "@/components/NotFoundComponent/notfoundComponent.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
