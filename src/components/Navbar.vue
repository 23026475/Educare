<template>
    <nav class="bg-teal-600 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">Educare</div>
        <ul class="hidden md:flex space-x-6">
          <li><router-link to="/" class="hover:text-teal-200">Sign Up</router-link></li>
          <li><router-link to="/login" class="hover:text-teal-200">Login</router-link></li>
          <li><router-link to="/password-reset" class="hover:text-teal-200">Password Reset</router-link></li>
        </ul>
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <!-- Mobile Menu -->
      <ul v-if="isMenuOpen" class="md:hidden flex flex-col space-y-2 mt-4">
        <li><router-link to="/" class="hover:text-teal-200">Sign Up</router-link></li>
        <li><router-link to="/login" class="hover:text-teal-200">Login</router-link></li>
        <li><router-link to="/password-reset" class="hover:text-teal-200">Password Reset</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "MainNavbar",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  