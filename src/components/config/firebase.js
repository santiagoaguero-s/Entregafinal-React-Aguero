


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMSzevSWLecpMCInvg6DJlkiR2G7N9IrQ",
  authDomain: "kalamakeupstore-26383.firebaseapp.com",
  projectId: "kalamakeupstore-26383",
  storageBucket: "kalamakeupstore-26383.appspot.com",
  messagingSenderId: "388048853459",
  appId: "1:388048853459:web:c47f47b86ebe7acf313726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
