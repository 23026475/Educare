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
          <div class="flex flex-col">
            <label for="email" class="font-semibold text-lg">Email Address</label>
            <input
              id="email"
              type="email"
              class="border border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
              placeholder="Enter your email"
            />
          </div>

          <!-- Password Field -->
          <div class="flex flex-col">
            <label for="password" class="font-semibold text-lg">Password</label>
            <input
              id="password"
              type="password"
              class="border border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <!-- Role Dropdown -->
          <div class="flex flex-col">
            <label for="role" class="font-semibold text-lg">Role</label>
            <select
              id="role"
              class="border border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled selected>Select your role</option>
              <option value="educator">Educator</option>
              <option value="student">Student</option>
            </select>
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
          <div class="absolute top-[-301px] left-[0px] z-[0] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-full bg-darkturquoise-100 w-[535px] h-[545px] pointer-events-none" />

          <div class="absolute top-[35px] left-[141px] w-[203px] h-[69px]">
            <a class="relative font-semibold flex items-center justify-center w-full h-full cursor-pointer z-[2] mq975:text-3xl mq1000:text-10xl" @click="onSignUpTextClick">
              Sign Up
            </a>
          </div>
          <div class="absolute top-[0px] left-[78px] text-xl font-semibold text-writing z-[3] mq975:text-base">
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