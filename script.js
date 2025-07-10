import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// 🔧 Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCH1Qor5428omiUDARz8zCvVYs8Lm0rp1o",
  authDomain: "qrcode-8c3d7.firebaseapp.com",
  projectId: "qrcode-8c3d7",
  storageBucket: "qrcode-8c3d7.appspot.com", // 🔧 Corrigido aqui o domínio!
  messagingSenderId: "787431670871",
  appId: "1:787431670871:web:6441686766090be047cf12"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Login
function logar() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("conteudo").style.display = "block";
      alert("Login realizado!");
    })
    .catch(e => alert("Erro: " + e.message));
}

// 🚪 Logout
function logout() {
  signOut(auth)
    .then(() => {
      document.getElementById("conteudo").style.display = "none";
      alert("Logout feito!");
    });
}

// 👀 Verifica se está logado ao carregar
onAuthStateChanged(auth, user => {
  document.getElementById("conteudo").style.display = user ? "block" : "none";
});
