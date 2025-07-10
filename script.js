// 1) Importe o App e Auth do CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// 2) Config do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCH1Qor5428omiUDARz8zCvVYs8Lm0rp1o",
  authDomain: "qrcode-8c3d7.firebaseapp.com.firebaseapp.com",
  projectId: "qrcode-8c3d7",
  storageBucket: "qrcode-8c3d7.firebasestorage.app",
  messagingSenderId: "787431670871",
  appId: "1:787431670871:web:6441686766090be047cf12"
};

// 3) Inicialize o Firebase
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const params      = new URLSearchParams(window.location.search);
const linkAnterior= params.get("prev"); // "1", "2", ou null
const nomeInt = params.get("utm_nome")

console.log(linkAnterior)

// 4) Funções globais de login/logout
window.logar = ev => {
  ev.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value;
  signInWithEmailAndPassword(auth, email, senha)
    .then(userCred => {
      console.log("✔️ Login OK:", userCred.user);
      document.getElementById("conteudo").style.display = "block";

      if (nomeInt.get("utm_nome") === "victor") {
        alert("Usuário é Victor!");
      }
  
    })
    .catch(err => {
      console.error("❌ Erro:", err.code, err.message);
      alert(err.message);
    });
};

window.logout = () => {
  signOut(auth).then(() => {
    console.log("🔒 Logout OK");
    document.getElementById("conteudo").style.display = "none";
  });
};

// 5) Listener de estado
onAuthStateChanged(auth, user => {
  document.getElementById("conteudo").style.display = user ? "block" : "none";
});
