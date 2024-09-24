import { createRouter, createWebHistory } from "vue-router";
import BusList from "@/views/busList.vue";
import BusStops from "@/views/busStops.vue";

const routes = [
  {
    path: "/",
    name: "Bus Lines",
    component: BusList,
  },
  {
    path: "/stops",
    name: "Stops",
    component: BusStops,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
