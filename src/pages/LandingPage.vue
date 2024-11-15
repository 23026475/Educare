<template>
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  </template>
  
  <script>

  import Hero from '@/components/Hero.vue';
  import Features from '@/components/Features.vue';
  import Testimonials from '@/components/Testimonials.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "LandingPage",
    components: {
      Hero,
      Features,
      Testimonials,
      Footer,
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Arial', sans-serif;
  }
  </style>
  