var a = document.getElementById("input");
var b = document.getElementById("par");
function tip(){
    var newElement = document.createElement("p");
    newElement.innerHTML=a.value;
    b.appendChild(newElement);
    a.value="";
}
