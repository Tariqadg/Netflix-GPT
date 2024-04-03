// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFRVzZk-Mncgy4EWKj70n_OKyorPRV9aI",
  authDomain: "netflixgpt-95bac.firebaseapp.com",
  projectId: "netflixgpt-95bac",
  storageBucket: "netflixgpt-95bac.appspot.com",
  messagingSenderId: "295102810122",
  appId: "1:295102810122:web:2e86275c59aed0636d37f3",
  measurementId: "G-0R2ET054VE"           
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();