document.addEventListener("DOMContentLoaded", function () {
  // Função para alternar entre Like e Deslike
  function alternarVoto(botaoClicado, botaoOposto) {
    const contadorClicado = botaoClicado.querySelector("span");
    let numClicado = Number(contadorClicado.textContent);

    // Se o outro botão estava ativo, desativa e diminui a contagem dele
    if (botaoOposto && botaoOposto.classList.contains("ativo")) {
      const contadorOposto = botaoOposto.querySelector("span");
      contadorOposto.textContent = Number(contadorOposto.textContent) - 1;
      botaoOposto.classList.remove("ativo");
    }

    // Alterna o estado do botão clicado
    if (!botaoClicado.classList.contains("ativo")) {
      contadorClicado.textContent = numClicado + 1;
      botaoClicado.classList.add("ativo");
    } else {
      contadorClicado.textContent = numClicado - 1;
      botaoClicado.classList.remove("ativo");
    }
  }

  // Associa os eventos aos botões de cada artigo
  const artigos = document.querySelectorAll("article");

  artigos.forEach(function (artigo) {
    const btnLike = artigo.querySelector(".like");
    const btnDeslike = artigo.querySelector(".deslike");

    if (btnLike && btnDeslike) {
      btnLike.addEventListener("click", function () {
        alternarVoto(btnLike, btnDeslike);
      });

      btnDeslike.addEventListener("click", function () {
        alternarVoto(btnDeslike, btnLike);
      });
    }
  });

  // Alternância de Tema Escuro
  const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

  if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", function () {
      document.body.classList.toggle("tema-escuro");
    });
  }
});