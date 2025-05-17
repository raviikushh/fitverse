// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBKA4NzBT1DyiuD68qQNz6GoveG9iN4Dn4",
//   authDomain: "activeforever.firebaseapp.com",
//   projectId: "activeforever",
//   storageBucket: "activeforever.firebasestorage.app",
//   messagingSenderId: "4915276707",
//   appId: "1:4915276707:web:fd88cd248bc1b832764816",
//   measurementId: "G-Q2JZ6C0PYF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKA4NzBT1DyiuD68qQNz6GoveG9iN4Dn4",
  authDomain: "activeforever.firebaseapp.com",
  projectId: "activeforever",
  storageBucket: "activeforever.firebasestorage.app",
  messagingSenderId: "4915276707",
  appId: "1:4915276707:web:fd88cd248bc1b832764816"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
