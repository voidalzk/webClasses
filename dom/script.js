document.addEventListener("DOMContentLoaded", function () {

    var conteudoInput = document.getElementById("content");
    var adicionarBotao = document.getElementById("buttonAdd");
    var conteudoAdicionado = document.getElementById("addedContent");

    adicionarBotao.addEventListener("click", adicionarConteudo);

    conteudoInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            adicionarConteudo();
        }
    });

    function adicionarConteudo() {
        var conteudo = conteudoInput.value; 

        if (conteudo.trim() !== "") { 
            var novoParagrafo = document.createElement("p"); 
            novoParagrafo.textContent = conteudo; 
            if (conteudoAdicionado.firstChild) {
                conteudoAdicionado.insertBefore(novoParagrafo, conteudoAdicionado.firstChild);
            } else {
                conteudoAdicionado.appendChild(novoParagrafo);
            }

            conteudoInput.value = "";
        }
    }
});
