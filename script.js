import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


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

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado:', userCredential.user);
        alert('Login bem-sucedido!');
        window.location.href = "home.html";
    } catch (error) {
        const errorMessage = error.message;
        document.getElementById('errorMessage').textContent = errorMessage;
        document.getElementById('errorMessage').style.display = 'block';
        function catchErrorMessage(error) {
            if (error.message == 'Firebase: Error (auth/too-many-requests).') {
                errorMessage = "Usuário não encontrado";
            }
        }
        alert(catchErrorMessage(error));
    }
});
