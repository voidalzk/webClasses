document.addEventListener("DOMContentLoaded", function () {

    var conteudoInput = document.getElementById("content");
    var adicionarBotao = document.getElementById("buttonAdd");
    var conteudoAdicionado = document.getElementById("tarefasNao");
    var conteudoConcluido = document.getElementById("tarefasSim")
    
    adicionarBotao.addEventListener("click", adicionarConteudo);

    conteudoInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            adicionarConteudo();
        }
    });
    
//    novaLista.addEventListener("click", () => document.getElementById("tarefasSim").appendChild(document.getElementById("lista")));
    

    function adicionarConteudo() {
        var novaLista = document.createElement("li");
        novaLista.id = 'lista';
        var conteudo = conteudoInput.value;
        novaLista.textContent = conteudo;

            if (conteudoAdicionado.firstChild) {
                conteudoAdicionado.insertBefore(novaLista, conteudoAdicionado.firstChild);
            } else {
                conteudoAdicionado.appendChild(novaLista);
            }

            conteudoInput.value = "";
        
    }
});
  


