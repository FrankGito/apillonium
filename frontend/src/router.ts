import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ExperienceView from "./views/ExperienceView.vue";
import AboutView from "./views/AboutView.vue";
import TeamView from "./views/TeamView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/experience", component: ExperienceView },
  { path: "/about", component: AboutView },
  { path: "/team", component: TeamView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  linkExactActiveClass: 'text-orange-400',
});

export default router;
