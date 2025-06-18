const formulario = document.getElementById('meuFormulario');
          
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const referrerURL = document.referrer;
  const formData = new FormData(formulario);
  const dadosFormulario = {};

  for (const [chave, valor] of formData.entries()) {
    dadosFormulario[chave] = valor;
  }

  console.log("Dados do formulário:", dadosFormulario);

  const nome = formData.get('nome');
  console.log("Nome:", nome);

  if (nome == 'S@M20442ti') {
    if (referrerURL) {
      console.log("A página foi carregada a partir de:", referrerURL);
    } else {
      console.log("A página foi carregada diretamente (sem referrer).");
    }

    if (referrerURL  == 'https://qr.me-qr.com/IyHVoosN')  {
        console.log(referrerURL)
    }
  }



});