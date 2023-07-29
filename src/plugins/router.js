// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homepage.vue'; // Use relative path to the views folder

const routes = [
  { path: "/", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
