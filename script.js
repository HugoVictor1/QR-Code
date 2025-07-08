    // 🔧 Configuração do Firebase
    const firebaseConfig = {
	    apiKey: "AIzaSyCH1Qor5428omiUDARz8zCvVYs8Lm0rp1o",
      authDomain: "qrcode-8c3d7.firebaseapp.com",
      projectId: "qrcode-8c3d7",
      storageBucket: "qrcode-8c3d7.firebasestorage.app",
      messagingSenderId: "787431670871",
      appId: "1:787431670871:web:6441686766090be047cf12"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // 📝 Cadastro
    function cadastrar() {
      const email = document.getElementById("Email").value;
      const senha = document.getElementById("Senha").value;
      auth.createUserWithEmailAndPassword(email, senha)
        .then(() => alert("Cadastro realizado!"))
        .catch(e => alert("Erro: " + e.message));
    }

    // 🔐 Login
    function logar() {
      const email = document.getElementById("loginEmail").value;
      const senha = document.getElementById("loginSenha").value;
      auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
          document.getElementById("conteudo").style.display = "block";
          alert("Login realizado!");
        })
        .catch(e => alert("Erro: " + e.message));
    }

    // 🚪 Logout
    function logout() {
      auth.signOut()
        .then(() => {
          document.getElementById("conteudo").style.display = "none";
          alert("Logout feito!");
        });
    }

    // 👀 Verifica se está logado ao carregar
    auth.onAuthStateChanged(user => {
      document.getElementById("conteudo").style.display = user ? "block" : "none";
    });






 

 

 
