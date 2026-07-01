
const likes = document.querySelectorAll(".like");
const deslikes = document.querySelectorAll(".deslike");



likes.forEach(function (botao) {

    let curtido = false;

    botao.addEventListener("click", function () {

        let texto = botao.querySelector("span");

        let numero = Number(texto.textContent);

        if (curtido == false) {

            numero++;

            texto.textContent = numero;

            curtido = true;

            botao.style.background =
                "linear-gradient(90deg, #00ff99, #00e5ff)";

        } else {

            numero--;

            texto.textContent = numero;

            curtido = false;

            botao.style.background =
                "linear-gradient(90deg, #ff00ff, #00e5ff)";
        }

    });

});




deslikes.forEach(function (botao) {

    let descurtido = false;

    botao.addEventListener("click", function () {

        let texto = botao.querySelector("span");

        let numero = Number(texto.textContent);

        if (descurtido == false) {

            numero++;

            texto.textContent = numero;

            descurtido = true;

            botao.style.background =
                "linear-gradient(90deg, #ff0000, #ff6600)";

        } else {

            numero--;

            texto.textContent = numero;

            descurtido = false;

            botao.style.background =
                "linear-gradient(90deg, #ff00ff, #00e5ff)";
        }

    });

});
