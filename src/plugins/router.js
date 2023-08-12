// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homepage.vue'; // Use relative path to the views folder
import LoginPage from '../views/loginpage.vue';
import TermsPage from '../views/termspage.vue';
import registerscreen1 from '../views/registerscreen1.vue';

const routes = [
  { path: "/", component: HomePage },
  { path: "/LoginPage", component: LoginPage },
  { path: "/TermsPage", component: TermsPage},
  { path: "/registerscreen1", component: registerscreen1}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
