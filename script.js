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

  if (senha == 'S@M20442ti') {
    location.replace(`qr_code_${nomeInt}.html`);
  }else{
    document.getElementById('senha').value='';
    alert("Senha master incorreta")
  }

});