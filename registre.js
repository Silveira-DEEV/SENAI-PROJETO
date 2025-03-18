import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdHZDe_FBsSqgZAMMRAyFWtRFhMuVUcMU",
    authDomain: "projeto-ferramentas-2.firebaseapp.com",
    databaseURL: "https://projeto-ferramentas-2-default-rtdb.firebaseio.com",
    projectId: "projeto-ferramentas-2",
    storageBucket: "projeto-ferramentas-2.firebasestorage.app",
    messagingSenderId: "885976754399",
    appId: "1:885976754399:web:5e5c900c132abfe117e16a",
    measurementId: "G-VJSEVTMX8G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function register(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById("errorMessage");

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Usuário registrado com sucesso!");
            window.location.href = "index.html";
            console.log("Usuário criado:", userCredential.user);
            errorMessage.style.display = "none";
            document.getElementById("registerForm").reset();
        })
        .catch((error) => {
            errorMessage.textContent = "Erro: " + error.message;
            errorMessage.style.display = "block";
            console.error("Erro ao registrar:", error);
        });
}
document.getElementById("registerForm").addEventListener("submit", register);