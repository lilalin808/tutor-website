
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmS3PF33c4BHzgjKuM0LUSu_wpIFQSNvk",
    authDomain: "peer-tutor-a1076.firebaseapp.com",
    projectId: "peer-tutor-a1076",
    storageBucket: "peer-tutor-a1076.firebasestorage.app",
    messagingSenderId: "677806357185",
    appId: "1:677806357185:web:be5149be7ba68343517240"
  };

  // Initialize Firebase
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
