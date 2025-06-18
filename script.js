const formulario = document.getElementById('meuFormulario');
          
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const params = new URLSearchParams(window.location.search);
  const formData = new FormData(formulario);
  const dadosFormulario = {};

  for (const [chave, valor] of formData.entries()) {
    dadosFormulario[chave] = valor;
  }

  console.log("Dados do formulário:", dadosFormulario);

  const senha = formData.get('senha');

  const nomeInt = params.get("utm_nome")

  async function fazerLogin() {

  const resposta = await fetch("https://auth-api-node.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ senha })
  });

  const dados = await resposta.json();
  const resultado = document.getElementById("resultado");

  if (resposta.ok && dados.token) {
    resultado.innerText = "Login bem-sucedido! Buscando perfil...";

    const perfil = await fetch("https://auth-api-node.onrender.com", {
      headers: {
        Authorization: `Bearer ${dados.token}`
      }
    });

    const dadosPerfil = await perfil.json();
    resultado.innerText = `Usuário autenticado!\nID: ${dadosPerfil.usuarioId}`;
  } else {
    resultado.innerText = "Erro: " + (dados.erro || "login falhou");
  }

}

  if (senha == 'S@M20442ti') {
    location.replace(`qr_code_${nomeInt}.html`);
  }else{
    document.getElementById('senha').value='';
    alert("Senha master incorreta")
  }

});




 

 

 
