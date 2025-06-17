const formulario = document.getElementById('meuFormulario');
          
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const formData = new FormData(formulario);
  const dadosFormulario = {};

  for (const [chave, valor] of formData.entries()) {
    dadosFormulario[chave] = valor;
  }

  console.log("Dados do formulário:", dadosFormulario);

  const nome = formData.get('nome');
  console.log("Nome:", nome);

  if (nome == 'S@M20442ti') {
    location.replace("qr_code_charleson.html")
  }

});