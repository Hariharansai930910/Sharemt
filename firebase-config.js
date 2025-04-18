import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Qozb-m-XTHx3tXWVGI5ObgLN6TwmSKc",
  authDomain: "shrmte.firebaseapp.com",
  projectId: "shrmte",
  storageBucket: "shrmte.firebasestorage.app",
  messagingSenderId: "660245185229",
  appId: "1:660245185229:web:d9fa02e30892bad9fd5f84"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
