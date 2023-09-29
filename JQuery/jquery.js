var uncompleted=[];
var completed=[];
$(document).ready(function () {
    let input = $("input[name=content]");
    let tarefas = $("#tasks");
    let concluded = $("#completed"); 
 
    input.on("keypress", function (ev) {
        if (ev.which === 13) {
            let newList = input.val();
            tarefas.append("<li>" + newList + "</li>");
            uncompleted.push(newList);
            input.val("");
        }
    });

    tarefas.on("click", "li", function () {
        let clicked = $(this); 
        clicked.detach();
        concluded.append(clicked);
        completed.push(clicked); 
    });
});

