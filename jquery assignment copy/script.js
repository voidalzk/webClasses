$(document).ready(function () {
    let input = $("input[name=content]");
    let tarefas = $("#tarefas");
    let concluidas = $("#concluidas"); 
 
    input.on("keypress", function (ev) {
        if (ev.which === 13) {
            let novaLista = input.val();
            tarefas.append("<li>" + novaLista + "</li>");
            input.val("");
        }
    });

    tarefas.on("click", "li", function () {
        let clicked = $(this); 
        clicked.detach(); 
        concluidas.append(clicked); 
    });
      var arr=[];
      $(".tarefas").each(function(){ arr.push($(this));});
      $.each(arr,function(key,val){ val.css('color','gray')}); 
 
});
