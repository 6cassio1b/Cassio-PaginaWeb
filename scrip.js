// Seleciona todos os botões de Like e Deslike
const botoesLike = document.querySelectorAll(".like");
const botoesDeslike = document.querySelectorAll(".deslike");

// Configura os Likes
botoesLike.forEach(function(botao) {
  botao.addEventListener("click", function() {
    let contador = botao.querySelector("span");
    let numero = Number(contador.textContent);
    
    if (!botao.classList.contains("ativo")) {
      contador.textContent = numero + 1;
      botao.classList.add("ativo");
      botao.style.backgroundColor = "var(--cor-contraste)";
    } else {
      contador.textContent = numero - 1;
      botao.classList.remove("ativo");
      botao.style.backgroundColor = "";
    }
  });
});

// Configura os Deslikes
botoesDeslike.forEach(function(botao) {
  botao.addEventListener("click", function() {
    let contador = botao.querySelector("span");
    let numero = Number(contador.textContent);
    
    if (!botao.classList.contains("ativo")) {
      contador.textContent = numero + 1;
      botao.classList.add("ativo");
      botao.style.backgroundColor = "var(--cor-contraste)";
    } else {
      contador.textContent = numero - 1;
      botao.classList.remove("ativo");
      botao.style.backgroundColor = "";
    }
  });
});

// Controle do Tema Escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function() {
  document.body.classList.toggle("tema-escuro");
});