// Import necessary Firebase modules (modular imports)
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase config (replace with your actual Firebase config values)
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-app-id.firebaseapp.com',
  databaseURL: 'https://your-app-id.firebaseio.com',
  projectId: 'your-app-id',
  storageBucket: 'your-app-id.appspot.com',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Handle form submission
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value; // Corrected 'passwrod' to 'password'

  // Sign up the user with Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed up
      const user = userCredential.user;
      alert('Successfully signed up');
      window.location.href = 'login.html'; // Redirect to login page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); // Show error message if signup fails
    });
});
