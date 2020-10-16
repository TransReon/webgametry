var gold = 0;
var exp = 0;
var recruit = 10;
var goldtext = document.getElementById("gold");
var exptext = document.getElementById("exp");
var recruittext = document.getElementById("recruit");
function updateStatus(){
    goldtext.innerHTML = "金币： " + gold;
    exptext.innerHTML = "经验： " + exp;
    recruittext.innerHTML = "英雄帖： " + recruit;
}

