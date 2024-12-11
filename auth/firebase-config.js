import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBef1gIXPu8FGHj5l2GRVykD4NBWYH_T_4",
    authDomain: "touttambacounda-df1cd.firebaseapp.com",
    projectId: "touttambacounda-df1cd",
    storageBucket: "touttambacounda-df1cd.firebasestorage.app",
    messagingSenderId: "908183055088",
    appId: "1:908183055088:web:8bfa276c53c80f28f6f035",
    measurementId: "G-HYS9TE9ZQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
