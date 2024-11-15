<template>
  <form @submit.prevent="register" class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
    <div class="flex flex-row md:flex-col gap-6">
      <!-- Left Column -->
      <div class="w-full md:w-1/2 space-y-4">
        <!-- First Name -->
        <div>
          <label for="firstName" class="block text-xs font-semibold text-[#568f94]">First Name</label>
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
          <label for="lastName" class="block text-xs font-semibold text-[#568f94]">Last Name</label>
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
          <label for="email" class="block text-xs font-semibold text-[#568f94]">Email Address</label>
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
          <label for="confirmEmail" class="block text-xs font-semibold text-[#568f94]">Confirm Email Address</label>
          <input
            id="confirmEmail"
            v-model="confirmEmail"
            type="email"
            class="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
          <p v-if="errors.value?.email" class="text-red-500 text-sm">{{ errors.value.email }}</p>
        </div>

        <!-- Phone Number -->
        <div>
          <label for="phoneNumber" class="block text-xs font-semibold text-[#568f94]">Phone Number</label>
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
      </div>

      <!-- Right Column -->
      <div class="w-full md:w-1/2 space-y-4">
        <!-- School -->
        <div>
          <label for="school" class="block text-xs font-semibold text-[#568f94]">School</label>
          <input
            id="school"
            v-model="school"
            type="text"
            class="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <!-- Study Level Dropdown -->
        <div>
          <label for="studyLevel" class="block text-xs font-semibold text-[#568f94]">Study Level</label>
          <select
            id="studyLevel"
            v-model="studyLevel"
            class="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select a study level</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="1st Grade">1st Grade</option>
            <option value="2nd Grade">2nd Grade</option>
            <option value="3rd Grade">3rd Grade</option>
            <option value="4th Grade">4th Grade</option>
            <option value="5th Grade">5th Grade</option>
            <option value="6th Grade">6th Grade</option>
            <option value="7th Grade">7th Grade</option>
            <option value="8th Grade">8th Grade</option>
            <option value="9th Grade">9th Grade</option>
            <option value="10th Grade">10th Grade</option>
            <option value="11th Grade">11th Grade</option>
            <option value="12th Grade">12th Grade</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Post-Graduate">Post-Graduate</option>
          </select>
        </div>

        <!-- Role Dropdown -->
        <div>
          <label for="role" class="block text-xs font-semibold text-[#568f94]">Role</label>
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
          <label for="password" class="block text-xs font-semibold text-[#568f94]">Password</label>
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
          <label for="confirmPassword" class="block text-xs font-semibold text-[#568f94]">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            class="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
          <p v-if="errors.value?.password" class="text-red-500 text-sm">{{ errors.value.password }}</p>
        </div>
      </div>
    </div>

    <!-- Buttons Section -->
    <div class="space-y-4">
      <button
        type="submit"
        :disabled="loading"
        class="w-full p-3 bg-[#568f94] text-white font-semibold rounded-md hover:bg-opacity-90 disabled:bg-gray-400"
      >
        {{ loading ? 'Submitting...' : 'Submit' }}
      </button>

      <button
        type="button"
        @click="clearForm"
        class="w-full p-3 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500"
      >
        Clear Form
      </button>

      <button
        @click="signInWithGoogle"
        type="button"
        class="w-full p-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
      >
        Sign In With Google
      </button>

      <p class="text-center text-sm">
        Already have an account? <router-link to="/login" class="text-blue-500">Log in here</router-link>
      </p>
    </div>
  </form>
</template>

  
<script>
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { ref } from 'vue';

const errors = ref({ email: '', password: '' });

export default {
  name: "RegistrationForm",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const confirmEmail = ref("");
    const phoneNumber = ref("");
    const school = ref("");
    const studyLevel = ref("");
    const role = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const loading = ref(false);
    const router = useRouter();

    const clearForm = () => {
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      confirmEmail.value = "";
      phoneNumber.value = "";
      school.value = "";
      studyLevel.value = "";
      role.value = "";
      password.value = "";
      confirmPassword.value = "";
    };

    const register = async () => {
      // Trim all input values
      const trimmedEmail = email.value.trim();
      const trimmedConfirmEmail = confirmEmail.value.trim();
      const trimmedPassword = password.value.trim();
      const trimmedConfirmPassword = confirmPassword.value.trim();

      // Check if email addresses match
      if (trimmedEmail !== trimmedConfirmEmail) {
        errors.value.email = "Email addresses do not match";
        console.log(errors.value);  // Log errors after setting the email error
        return;
      } else {
        errors.value.email = "";
      }

      // Check if passwords match
      if (trimmedPassword !== trimmedConfirmPassword) {
        errors.value.password = "Passwords do not match";
        console.log(errors.value);  // Log errors after setting the password error
        return;
      } else {
        errors.value.password = "";
      }

      // Check password strength
      if (trimmedPassword.length < 8) {
        alert("Password must be at least 8 characters long");
        console.log(errors.value);  // Log errors if password strength validation fails
        return;
      }

      loading.value = true;
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
        const user = userCredential.user;

        // Save user data to Firestore
        const db = getFirestore();
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName.value.trim(),
          lastName: lastName.value.trim(),
          email: trimmedEmail,
          phoneNumber: phoneNumber.value.trim(),
          school: school.value.trim(),
          studyLevel: studyLevel.value.trim(),
          role: role.value,
        });

        alert("Registration successful");
        router.push("/login");
      } catch (error) {
        // Enhanced error handling
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("The email address is already in use. Please use a different email.");
            break;
          case "auth/invalid-email":
            alert("The email address is invalid. Please enter a valid email.");
            break;
          case "auth/weak-password":
            alert("The password is too weak. Please use a stronger password.");
            break;
          default:
            alert("An unexpected error occurred: " + error.message);
            break;
        }
        console.error("Firebase Error Code:", error.code);
      } finally {
        loading.value = false;
      }
    };

    const signInWithGoogle = async () => {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Save user data to Firestore
        const db = getFirestore();
        await setDoc(doc(db, "users", user.uid), {
          firstName: user.displayName.split(" ")[0] || "",
          lastName: user.displayName.split(" ")[1] || "",
          email: user.email,
          role: "student",
        });

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
      confirmEmail,
      phoneNumber,
      school,
      studyLevel,
      role,
      password,
      confirmPassword,
      loading,
      errors,
      register,
      signInWithGoogle,
      clearForm,
    };
  },
};
</script>

<style scoped>
/* Customize your form styles here if needed */
</style>
  
  