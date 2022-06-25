import Qr from "./views/Qr.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Main from "./views/Main.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/store/", component: Main, meta: { title: "Main" } },
  { path: "/store/qr", component: Qr, meta: { title: "QR" } },
  {
    path: "/store/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: "/store/:path(.*)", component: NotFound },
];
