import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Sign Up
document.getElementById("register-btn").addEventListener("click", () => {
    const firstName = document.getElementById("register-first-name").value;
    const lastName = document.getElementById("register-last-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").textContent = "Compte créé avec succès !";
            // Tu peux ajouter ici la logique pour gérer le nom et prénom, comme les sauvegarder dans Firestore
        })
        .catch((error) => {
            let errorMessage;
            switch (error.code) {
                case "auth/email-already-in-use":
                    errorMessage = "Cet email est déjà utilisé.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Format d'email invalide.";
                    break;
                case "auth/weak-password":
                    errorMessage = "Le mot de passe doit contenir au moins 6 caractères.";
                    break;
                default:
                    errorMessage = error.message;
            }
            document.getElementById("message").textContent = errorMessage;
        });
});

// Login
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").textContent = "Connexion réussie !";
        })
        .catch((error) => {
            document.getElementById("message").textContent = error.message;
        });
});

// Boutons pour changer de formulaire
document.getElementById("show-register-btn").addEventListener("click", () => {
    document.getElementById("login-section").style.display = "none"; // Masquer le formulaire de connexion
    document.getElementById("register-section").style.display = "block"; // Afficher le formulaire d'inscription
});

document.getElementById("show-login-btn").addEventListener("click", () => {
    document.getElementById("register-section").style.display = "none"; // Masquer le formulaire d'inscription
    document.getElementById("login-section").style.display = "block"; // Afficher le formulaire de connexion
});
