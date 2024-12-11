import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Gestion des formulaires : Affichage
document.getElementById("show-register-btn").addEventListener("click", () => {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
});

document.getElementById("show-login-btn").addEventListener("click", () => {
    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
});

// Inscription
document.getElementById("register-btn").addEventListener("click", () => {
    const firstName = document.getElementById("register-first-name").value;
    const lastName = document.getElementById("register-last-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Réinitialiser les champs
            document.getElementById("register-first-name").value = "";
            document.getElementById("register-last-name").value = "";
            document.getElementById("register-email").value = "";
            document.getElementById("register-password").value = "";

            // Afficher un message de succès
            document.getElementById("message").textContent = "Inscription réussie ! Veuillez vous connecter.";
            document.getElementById("register-section").style.display = "none";
            document.getElementById("login-section").style.display = "block";
        })
        .catch((error) => {
            document.getElementById("message").textContent = error.message;
        });
});

// Connexion
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Redirection après connexion
            window.location.href = "eMembre.html";
        })
        .catch((error) => {
            document.getElementById("message").textContent = "email ou mots de passe incorrect";
        });
});
