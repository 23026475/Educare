<template>
    <div class="flex bg-white text-[#558794] py-1.5 px-20 shadow md:flex justify-between items-center">
    <!-- Logo Section -->
        <div class="flex items-center cursor-pointer ">
            <span class="text-green-300 text-xl mr-1">
                <i class="bi bi-messenger"></i>
            </span>
            <h1 class="text-xl">Educare</h1>
        </div>
    
    <!-- Navigation Section -->
        <nav class="flex md:flex p-0 mt-1 md:mt-0 ">
            <ul class="flex flex-row list-none md:flex-col md:items-center justify-center md:justify-between w-auto">
                <span></span>
                <li class="md:mx-4">
                  <router-link to="/" class="text-xl p-3 font-bold text-[#558794] no-underline hover:bg-gray-700 hover:text-green-300">Log In</router-link>
                </li>
                <li class="md:mx-4">
                  <router-link to="/sign-up" class="text-xl p-3 font-bold text-[#558794] no-underline hover:bg-gray-700 hover:text-green-300">Sign Up</router-link>
                </li>
                <li class="md:mx-4">
                  <router-link to="/password-reset" class="text-xl p-3 font-bold text-[#558794] no-underline hover:bg-gray-700 hover:text-green-300">password</router-link>
                </li>
                
            </ul>
        </nav>
</div>

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
  