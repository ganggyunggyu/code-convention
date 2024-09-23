import { createRouter, createWebHistory } from 'vue-router';

export const routes = [];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let previousRoute = null;

router.beforeEach((to, from, next) => {
  previousRoute = from;
  next();
});

export function getPreviousRoute() {
  return previousRoute;
}

export default router;
