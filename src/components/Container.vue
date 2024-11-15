<template>
  <div class="self-stretch h-[673px] relative max-w-full text-left text-5xl text-writing font-syne">
    <div class="absolute top-[0px] left-[0px] w-full flex flex-row items-end justify-between max-w-full gap-5">
      <!-- Welcome and Form Instructions -->
      <div class="flex flex-col items-start justify-start gap-10 min-w-[333px] min-h-[185px] max-w-full mq975:gap-5">
        <div class="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h2 class="m-0 h-[78px] flex-1 relative text-17xl font-bold flex items-center max-w-full z-[2] mq975:text-3xl mq1000:text-10xl">
            Welcome back!
          </h2>
        </div>
        
        <!-- Form Fields -->
        <div class="flex flex-col gap-6 w-full max-w-md">
          <!-- Email Field -->
          <div class="flex flex-col w-full relative">
            <label for="email" class="font-semibold text-lg">Email Address</label>
            <div class="relative">
              <input
                id="email"
                type="email"
                class="border border-black rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-blue-500 w-full"
                placeholder="Enter your email"
              />
              <i class="fas fa-envelope absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>

          <!-- Password Field -->
          <div class="flex flex-col w-full relative">
            <label for="password" class="font-semibold text-lg">Password</label>
            <div class="relative">
              <input
                id="password"
                type="password"
                class="border border-black rounded-lg px-4 py-2 pl-10 pr-10 focus:outline-none focus:border-blue-500 w-full"
                placeholder="Enter your password"
              />
              <i class="fas fa-lock absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <i class="fas fa-eye absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"></i>
            </div>
            <!-- Forgot Password Link -->
            <div class="text-right mt-2">
              <a
                @click="onForgotPasswordClick"
                class="text-blue-500 hover:underline cursor-pointer font-semibold"
                style="font-size: 0.75rem;"
              >
                Forgot Password? Click here
              </a>
            </div>
          </div>

          <!-- Role Dropdown -->
          <div class="flex flex-col w-full relative">
            <label for="role" class="font-semibold text-lg">Role</label>
            <div class="relative">
              <select
                id="role"
                class="border border-black rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-blue-500 w-full"
              >
                <option value="" disabled selected>Select your role</option>
                <option value="educator">Student</option>
                <option value="student">Learner</option>
                <option value="educator">Teacher</option>
                <option value="student">lecturer</option>
              </select>
              <i class="fas fa-user-tag absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>

          <!-- Remember Me Checkbox -->
          <div class="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              class="h-5 w-5 border border-black rounded focus:outline-none focus:border-blue-500"
            />
            <label for="remember" class="text-lg font-semibold">Remember Me</label>
          </div>
        </div>
      </div>

<!-- Sign Up Section -->
<div class="flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[377px] max-w-full text-center text-17xl text-gray mq450:min-w-full">
  <div class="self-stretch h-[244px] relative">
    <!-- Decorative Circle Background (adjusted to avoid overlap) -->
    <div class="absolute top-[-480px] left-[100px] z-[0] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-full bg-darkturquoise-100 w-[535px] h-[545px] pointer-events-none"></div>

    <div class="absolute top-[-120px] left-[141px] w-[223px] h-[39px]">
      <a 
        class="relative font-semibold flex items-center justify-center w-full h-full cursor-pointer z-[2]  bg-teal-100 text-white py-3 px-8 shadow-[0px_10px_4px_rgba(0,_0,_0,_0.25)] hover:bg-cadetblue rounded-xl transition duration-300"
        @click="onSignUpTextClick"
      >
        Sign Up
      </a>
    </div>
    <div class="absolute top-[-150px] left-[132px] text-xl font-semibold text-writing z-[3] mq975:text-base">
      Don’t have an account?
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentContainer",
  methods: {
    onSignUpTextClick() {
      this.$router.push("/");
    },
    onForgotPasswordClickClick() {
      this.$router.push("/password-reset-page");
    },
  },
});
</script>