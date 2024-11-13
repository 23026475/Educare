import { createRouter, createWebHistory } from 'vue-router';
import SignUpPage from '../pages/SignUpPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import PasswordResetPage from '../pages/PasswordResetPage.vue';

const routes = [
  { path: '/', name: 'SignUpPage', component: SignUpPage },
  { path: '/login', name: 'Login', component: LoginPage},
  { path: '/password-reset', name: 'PasswordReset', component: PasswordResetPage, }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

