// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-wERy7XpW3SeMr6uIQPCW1SQJMPeXLk",
  authDomain: "meilyan-portofolio.firebaseapp.com",
  projectId: "meilyan-portofolio",
  storageBucket: "meilyan-portofolio.firebasestorage.app",
  messagingSenderId: "276108129589",
  appId: "1:276108129589:web:9aeb07200fe9a79ab9087c",
  measurementId: "G-GSJEZQSQ8E",
  databaseURL: "https://meilyan-portofolio-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
