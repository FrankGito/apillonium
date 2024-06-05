import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ExperienceView from "./views/ExperienceView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/experience", component: ExperienceView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
