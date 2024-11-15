import { createRouter, createWebHistory } from 'vue-router';
import SignUpPage from '../pages/SignUpPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import PasswordResetPage from '../pages/PasswordResetPage.vue';
import LandingPage from '@/pages/LandingPage.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/sign-up', name: 'SignUp', component: SignUpPage},
  { path: '/password-reset', name: 'PasswordReset', component: PasswordResetPage, }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

