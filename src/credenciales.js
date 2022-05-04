// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlNVJy15yIikWEK06jMsd99v6x6Adz_Jw",
  authDomain: "practicareact-cf570.firebaseapp.com",
  projectId: "practicareact-cf570",
  storageBucket: "practicareact-cf570.appspot.com",
  messagingSenderId: "442195606760",
  appId: "1:442195606760:web:65b355e50ac64e789edd5d",
  measurementId: "G-VTQYLH9HPK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);