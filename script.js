
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.y/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.x.y/firebase-auth.js";

console.log("Script carregado");

fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCH1Qor5428omiUDARz8zCvVYs8Lm0rp1o", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "victor.silva@samuraitratores.com.br",
    password: "123456",
    returnSecureToken: true
  })
})
.then(res => res.json())
.then(data => console.log("Firebase login OK:", data))
.catch(err => console.error("Erro via fetch:", err));

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
window.logar = function () {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log("Login bem-sucedido:", userCredential);
    document.getElementById("conteudo").style.display = "block";
    alert("Login realizado com sucesso!");
  })
  .catch(e => {
    console.error("Erro no login:", e);
    alert("Erro: " + e.message);
  });
}

// 🚪 Logout
window.logout = function () {
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
