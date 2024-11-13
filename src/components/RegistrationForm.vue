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
          type="submit"
          class="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </template>
  
  <script>
  import { db } from '../firebaseConfig';
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        school: '',
        password: '',
        confirmPassword: '',
        role: ''
      };
    },
    methods: {
      async submitRegistration() {
        if (this.email !== this.confirmEmail) {
          alert("Emails do not match!");
          return;
        }
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
  
        {
  try {
    const docRef = await addDoc(collection(db, 'registrations'), {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      school: this.school,
      role: this.role,
      password: this.password // Ensure sensitive data handling in production.
    });
    console.log("Document written with ID: ", docRef.id); // Check the console for this log.
    alert('Registration successful!');
    this.clearForm();
  } catch (error) {
    console.error('Error registering: ', error); // Look for error logs here.
  }
}
      },
      clearForm() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.confirmEmail = '';
        this.phoneNumber = '';
        this.school = '';
        this.password = '';
        this.confirmPassword = '';
        this.role = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Customize styles here */
  </style>
  