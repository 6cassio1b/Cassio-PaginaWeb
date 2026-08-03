const likes = document.querySelectorAll(".like");
const deslikes = document.querySelectorAll(".deslike");

likes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    let texto = botao.querySelector("span");
    let numero = Number(texto.textContent);
    
    // Verifica se este botão específico já foi clicado
    if (botao.dataset.curtido !== "true") {
      texto.textContent = numero + 1;
      botao.dataset.curtido = "true";
      botao.style.opacity = "0.7"; // Efeito visual opcional de ativo
    } else {
      texto.textContent = numero - 1;
      botao.dataset.curtido = "false";
      botao.style.opacity = "1";
    }
  });
});

deslikes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    let texto = botao.querySelector("span");
    let numero = Number(texto.textContent);
    
    // Verifica se este botão específico já foi clicado
    if (botao.dataset.descurtido !== "true") {
      texto.textContent = numero + 1;
      botao.dataset.descurtido = "true";
      botao.style.opacity = "0.7";
    } else {
      texto.textContent = numero - 1;
      botao.dataset.descurtido = "false";
      botao.style.opacity = "1";
    }
  });
});

// Controle do Tema Escuro (Perfeito, não precisou mexer)
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
  const corpo = document.body;
  if (corpo.classList.contains("tema-escuro")) {
    corpo.classList.remove("tema-escuro");
  } else {
    corpo.classList.add("tema-escuro");
  }
}