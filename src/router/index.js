import { createRouter, createWebHistory } from 'vue-router';
import SignUpPage from '../pages/SignUpPage.vue';

const routes = [
  { path: '/', name: 'SignUpPage', component: SignUpPage },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

