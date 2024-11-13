// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUpPage from '../pages/SignUpPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routes = [
  { path: '/', name: 'SignUpPage', component: SignUpPage },
  { path: '/LogInPage', name: 'LogInPage', component: LoginPage}
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

