<template>
    <form @submit.prevent="submitRegistration" class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <!-- First Name -->
      <div>
        <label for="firstName" class="block text-sm font-semibold text-gray-700">First Name</label>
        <input
          id="firstName"
          v-model="firstName"
          type="text"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
  
      <!-- Last Name -->
      <div>
        <label for="lastName" class="block text-sm font-semibold text-gray-700">Last Name</label>
        <input
          id="lastName"
          v-model="lastName"
          type="text"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
  
      <!-- Email Address -->
      <div>
        <label for="email" class="block text-sm font-semibold text-gray-700">Email Address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
  
      <!-- Confirm Email Address -->
      <div>
        <label for="confirmEmail" class="block text-sm font-semibold text-gray-700">Confirm Email Address</label>
        <input
          id="confirmEmail"
          v-model="confirmEmail"
          type="email"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
  
      <!-- Phone Number -->
      <div>
        <label for="phoneNumber" class="block text-sm font-semibold text-gray-700">Phone Number</label>
        <input
          id="phoneNumber"
          v-model="phoneNumber"
          type="tel"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          pattern="^[0-9]{10}$"
          title="Enter a valid 10-digit phone number"
          required
        />
      </div>
  
      <!-- School -->
      <div>
        <label for="school" class="block text-sm font-semibold text-gray-700">School</label>
        <input
          id="school"
          v-model="school"
          type="text"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label for="StudyLevel" class="block text-sm font-semibold text-gray-700">Study Level</label>
        <input
          id="StudyLevel"
          v-model="StudyLevel"
          type="text"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
  
      <!-- Role Dropdown -->
      <div>
        <label for="role" class="block text-sm font-semibold text-gray-700">Role</label>
        <select
          id="role"
          v-model="role"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>Select a role</option>
          <option value="student">Student</option>
          <option value="learner">Learner</option>
          <option value="teacher">Teacher</option>
          <option value="lecture">Lecture</option>
        </select>
      </div>
  
      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          minlength="8"
          required
        />
      </div>
  
      <!-- Confirm Password -->
      <div>
        <label for="confirmPassword" class="block text-sm font-semibold text-gray-700">Confirm Password</label>
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          type="password"
          class="w-full mt-1 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
  
      <!-- Submit Button -->
      <div>
        <button
            @click="register" class="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
          {{ loading ? 'Submitting...' : 'Submit' }}
        </button>
      </div>
      <div>
        <button @click="signInWithGoogle">SignIn With Google</button>
      </div>
    </form>
  </template>
  
  <script>
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from 'vue';

export default {
  name: "RegistrationForm",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const school = ref("");
    const StudyLevel = ref("");
    const role = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const loading = ref(false);
    const router = useRouter();

    const register = async () => {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
      }
      
      loading.value = true;
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert("Registration successful");
        router.push("/login");
      } catch (error) {
        alert(error.message);
        console.error(error.code);
      } finally {
        loading.value = false;
      }
    };

    const signInWithGoogle = async () => {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        router.push("/dashboard");
      } catch (error) {
        alert(error.message);
        console.error(error.code);
      }
    };

    return {
      firstName,
      lastName,
      email,
      phoneNumber,
      school,
      StudyLevel,
      role,
      password,
      confirmPassword,
      loading,
      register,
      signInWithGoogle,
    };
  },
};
</script>
  <style scoped>
  /* Customize your form styles here if needed */
  </style>
  
  