// Função genérica para alternar contagem e classe
function alternarBotao(botao, botaoOposto) {
  let contador = botao.querySelector("span");
  let numero = Number(contador.textContent);
  
  // Se o botão oposto (ex: deslike) estiver ativo, remove o estado dele
  if (botaoOposto && botaoOposto.classList.contains("ativo")) {
    let contadorOposto = botaoOposto.querySelector("span");
    contadorOposto.textContent = Number(contadorOposto.textContent) - 1;
    botaoOposto.classList.remove("ativo");
  }

  // Alterna o estado do botão atual
  if (!botao.classList.contains("ativo")) {
    contador.textContent = numero + 1;
    botao.classList.add("ativo");
  } else {
    contador.textContent = numero - 1;
    botao.classList.remove("ativo");
  }
}

// Configura Likes e Deslikes vinculados ao mesmo pai/container
const botoesLike = document.querySelectorAll(".like");

botoesLike.forEach(function(botaoLike) {
  // Encontra o botão de deslike do mesmo card/container
  const container = botaoLike.parentElement;
  const botaoDeslike = container.querySelector(".deslike");

  botaoLike.addEventListener("click", function() {
    alternarBotao(botaoLike, botaoDeslike);
  });

  if (botaoDeslike) {
    botaoDeslike.addEventListener("click", function() {
      alternarBotao(botaoDeslike, botaoLike);
    });
  }
});

// Controle do Tema Escuro com validação
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) {
  btnTemaEscuro.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
  });
}