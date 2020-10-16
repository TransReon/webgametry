var a = document.getElementById("input");
var b = document.getElementById("par");
function tip(){
    var new = document.createElement("p");
    new.innerHTML=a.value;
    b.appendChild(new);
}
