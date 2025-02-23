// Import necessary Firebase modules (modular imports)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the auth module

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

export { app, auth };

// Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
//  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyBmS3PF33c4BHzgjKuM0LUSu_wpIFQSNvk",
//    authDomain: "peer-tutor-a1076.firebaseapp.com",
//    projectId: "peer-tutor-a1076",
  //  storageBucket: "peer-tutor-a1076.firebasestorage.app",
    //messagingSenderId: "677806357185",
 //   appId: "1:677806357185:web:be5149be7ba68343517240"
//  };

  // Initialize Firebase

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click",function(event){
  event.preventDefault()
    //inputs
const email = document.getElementById("email").value;
const passwrod = document.getElementById("password").value;
  
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    //signed up
    const user = userCredential.user;
    alert("Signing Up")
    window.location.href="login.html";
    //...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    //..
  });
})
