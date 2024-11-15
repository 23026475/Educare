<template>
  <div class="self-stretch h-[673px] relative max-w-full text-left text-gray-700 font-sans">
    <div class="absolute top-40 left-0 w-full flex flex-col items-center gap-6">
      <!-- Welcome Message -->
      <h1 class="text-4xl font-bold text-writing mb-6">Welcome back!</h1>
      
      <!-- Form Fields -->
      <div class="flex flex-col gap-5 w-full max-w-sm">
        <!-- Email Field -->
        <div class="flex flex-col relative">
          <label for="email" class="text-sm font-semibold">Email address</label>
          <div class="relative mt-1">
            <input
              v-model="email"
              id="email"
              type="email"
              class="border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-teal-500 w-full shadow-sm"
              placeholder="Enter your email"
            />
            <i class="fas fa-envelope absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>

        <!-- Password Field -->
        <div class="flex flex-col relative">
          <label for="password" class="text-sm font-semibold">Password</label>
          <div class="relative mt-1">
            <input
              v-model="password"
              id="password"
              type="password"
              class="border border-gray-300 rounded-lg px-4 py-2 pl-10 pr-10 focus:outline-none focus:border-teal-500 w-full shadow-sm"
              placeholder="Enter your password"
            />
            <i class="fas fa-lock absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
          </div>
          <div class="text-right mt-2">
            <p class="text-sm font-semibold text-gray-700">
              Forgot password?
              <a
                @click="onForgotPasswordClick"
                class="text-teal-500 hover:underline text-xs font-semibold cursor-pointer"
              >
                Click here
              </a>
            </p>
          </div>
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

        <!-- Role Dropdown -->
        <div class="flex flex-col relative">
          <label for="role" class="text-sm font-semibold">Role</label>
          <div class="relative mt-1">
            <select
              id="role"
              class="border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-teal-500 w-full shadow-sm"
            >
              <option value="" disabled selected>Select your role</option>
              <option value="student">Student</option>
              <option value="learner">Learner</option>
              <option value="teacher">Teacher</option>
              <option value="lecturer">Lecturer</option>
            </select>
            <i class="fas fa-user-tag absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>

        <!-- Remember Me Checkbox -->
        <div class="flex items-center gap-2 mt-2">
          <input
            id="remember"
            type="checkbox"
            class="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
          />
          <label for="remember" class="text-sm font-semibold">Remember Me</label>
        </div>

        <!-- Login Button -->
        <button
          class="bg-teal-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
          @click="loginUser"
          :disabled="loading"
        >
          Login
        </button>

        <!-- Sign Up Section -->
        <div class="text-center mt-4">
          <p class="text-sm font-semibold text-gray-700">
            Don’t have an account? 
            <a
              @click="onSignUpTextClick"
              class="text-teal-500 hover:underline cursor-pointer"
            >
              Sign Up
            </a>
          </p>
        </div>

        <!-- Or Login With Section -->
        <div class="flex items-center justify-center my-4">
          <span class="text-gray-500 text-sm">Or login with</span>
        </div>

        <!-- Social Icons -->
        <div class="flex justify-center gap-6 mb-4">
          <button class="bg-teal-500 p-3 rounded-full text-white shadow hover:bg-teal-600 transition">
            <i class="fas fa-cloud"></i>
          </button>
          <button class="bg-teal-500 p-3 rounded-full text-white shadow hover:bg-teal-600 transition">
            <i class="fas fa-windows"></i>
          </button>
          <button class="bg-teal-500 p-3 rounded-full text-white shadow hover:bg-teal-600 transition">
            <i class="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: "ContentContainer",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", 
      loading: false,
    };
  },
  methods: {
    async loginUser() {
      this.errorMessage = ""; 
      this.loading = true;

      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        console.log("User logged in:", user);
        this.$router.push("/dashboard");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          this.errorMessage = "No account found with this email.";
        } else if (error.code === "auth/wrong-password") {
          this.errorMessage = "Incorrect password. Please try again.";
        } else {
          this.errorMessage = "Login failed. Please try again.";
        }
      } finally {
        this.loading = false;
      }
    },
    onSignUpTextClick() {
      this.$router.push("/sign-up");
    },
    onForgotPasswordClick() {
      this.$router.push("/password-reset");
    },
  },
});
</script>