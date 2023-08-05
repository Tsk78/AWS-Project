// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homepage.vue'; // Use relative path to the views folder
import LoginPage from '../views/loginpage.vue'
const routes = [
  { path: "/", component: HomePage },
  { path: "/LoginPage", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
