let inputs=document.getElementById("inp");
let text=document.getElementById(".text");

function add(){
    if(inputs.value == ""){
        alert("please enter a task");
    }
    else{
        let newele=document.createElement("ul");
        newele.innerHTML='${inputs.value}';
        text.appendchild(newele);
    }
}