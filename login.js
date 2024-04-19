
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAb3Feq_bO5RAne-sgY9T7UkZbT9xE6VaI",
    authDomain: "dtauth-97a63.firebaseapp.com",
    projectId: "dtauth-97a63",
    storageBucket: "dtauth-97a63.appspot.com",
    messagingSenderId: "987323861907",
    appId: "1:987323861907:web:0c46b4c85007c25de4f666",
    measurementId: "G-J4H8S6GBG6"
  };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const submit=document.getElementById('submit');
  
submit.addEventListener("click",function(event) {
event.preventDefault()
const email=document.getElementById('email').value;
  const password=document.getElementById('pass').value;

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("reached")
    window.location.href="home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})
