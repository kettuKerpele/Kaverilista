var namess = [];
var count = 0;
var itemName;
var input = document.getElementById("input");
var addBtn = document.getElementById("submitJtn");
var display = document.getElementById("output");
var num = document.getElementById("numbers");

submitJtn.addEventListener("click", add_display);


function add_display() {

    if (input.value === '') {
       alert("Lisää nimi");
       
    } else {

    namess.push(input.value);
    input.value='';

    count += 1;
    document.getElementById("numbers").innerHTML = "Kavereita: " + count;

    let namesLen = namess.length;

    let text = "<ul>";
    for (let i = 0; i < namesLen; i++) {
      text += "<li>" + namess[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("output").innerHTML = text;    
   }
}

 
function jarjesta(event) {
    const arrSorted = namess.toSorted();
    let namesLen = arrSorted.length;

    let text = "<ul>";
    for (let i = 0; i < namesLen; i++) {
      text += "<li>" + arrSorted[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("output").innerHTML = text;
}


function vaihda(event) {
    location.href="versio1.html";
}


function poista(event) {
    itemName = document.getElementById("input").value;
    const arr = namess;
        
    const index = namess.indexOf(itemName);
    if (index > -1) {
       arr.splice(index, 1);
       input.value = '';
       document.getElementById("output").innerHTML = arr;
       count -= 1;
       document.getElementById("numbers").innerHTML = "Kavereita: " + count;
    }
    jarjesta();
        
}














