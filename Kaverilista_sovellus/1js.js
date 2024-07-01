var input = document.getElementById("input");
var names = [];
var addBtn = document.getElementById("submit");
var display = document.getElementById("output");
var num = document.getElementById("numbers");
var count = 0;


submit.addEventListener("click", addAnddisplay);

function addAnddisplay() {

    if (input.value === '') {
       alert("Lisää nimi");
       
    } else {

    names.push(input.value);
    input.value='';

    count += 1;
    document.getElementById("numbers").innerHTML = "Lisätty: " + count;
   
let namesLen = names.length;
if (namesLen === 10) {
    alert("10 nimeä lisätty");
    addBtn.style.display = 'none';
    input.style.display = 'none';
   
    let namesLen = names.length;

    let text = "<ul>";
    for (let i = 0; i < namesLen; i++) {
      text += "<li>" + names[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("output").innerHTML = text;
   }
  }
}

function vaihda(event) {
   location.href="versio2.html";
}














