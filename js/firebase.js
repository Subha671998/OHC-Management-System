// Firebase SDK Import

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyB8f-IG0KT4aSQGle_7KM91hSgw2e2fpeo",
    authDomain: "ohc-management-system.firebaseapp.com",
      projectId: "ohc-management-system",
        storageBucket: "ohc-management-system.firebasestorage.app",
          messagingSenderId: "611475504571",
            appId: "1:611475504571:web:08641847c15dd1092d589e",
              measurementId: "G-Z6QY948LQM"
              };

              // Initialize Firebase

              const app = initializeApp(firebaseConfig);

              // Firebase Services

              const auth = getAuth(app);
              const db = getFirestore(app);

              // Export

              export { app, auth, db };