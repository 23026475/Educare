<template>
  <section class="py-16 bg-gradient-to-r from-[#3da9b3] to-[#3d8085]">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8 text-white">What Our Users Say</h2>
      <div class="relative overflow-hidden h-[400px]">
        <!-- Slideshow Container -->
        <div
          class="transition-transform duration-700"
          :style="{ transform: `translateY(-${currentIndex * 200}px)` }"
        >
          <!-- Testimonial Cards -->
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="p-6 bg-white rounded-lg shadow-lg mb-4"
          >
            <p class="text-gray-700 italic">{{ testimonial.text }}</p>
            <p class="text-right font-bold mt-4">{{ testimonial.author }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center mt-6 space-x-2">
        <span
          v-for="(slide, index) in totalSlides"
          :key="index"
          @click="currentIndex = index"
          :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
          class="w-3 h-3 rounded-full cursor-pointer"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserTestimonials",
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          text: "EduCare has transformed the way I learn. The personalized quizzes are amazing!",
          author: "- Student User",
        },
        {
          text: "As a teacher, managing courses has never been easier. EduCare saves me so much time.",
          author: "- Teacher User",
        },
        {
          text: "The AI-powered quizzes are a game changer for personalized learning.",
          author: "- Parent User",
        },
        {
          text: "I love the real-time notifications. I never miss an update!",
          author: "- High School Student",
        },
        {
          text: "The discussion forums have been great for collaborative learning.",
          author: "- College Student",
        },
      ],
    };
  },
  computed: {
    totalSlides() {
      // Calculate the total number of slides needed (2 cards per slide)
      return Math.ceil(this.testimonials.length / 2);
    },
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      }, 5000); // Change slide every 5 seconds
    },
  },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
