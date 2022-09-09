//<script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5NWzTJ26lTJ2kG4d9kX--9f3JaCUkXTQ",
    authDomain: "test-368b5.firebaseapp.com",
    projectId: "test-368b5",
    storageBucket: "test-368b5.appspot.com",
    messagingSenderId: "936747802633",
    appId: "1:936747802633:web:0712dfd0c1aa87d44f98d8",
    measurementId: "G-YCNTLE3TEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//</script>