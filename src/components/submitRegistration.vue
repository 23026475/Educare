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
      password: '',
      role: ''
    };
  },
  methods: {
    async submitRegistration() {
      try {
        await addDoc(collection(db, 'registrations'), {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          confirmEmail: this.confirmEmail,
          phoneNumber: this.phoneNumber,
          role: this.role
        });
        alert('Registration successful!');
      } catch (error) {
        console.error('Error registering: ', error);
      }
    }
  }
};
