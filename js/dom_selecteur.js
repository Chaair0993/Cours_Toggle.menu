// 2emee partie
// -- SELECTION ById
// -- SELECTION ByTagName
// -- SELECTION ByClassName
// -- SELECTION querySelector
// -- SELECTION querySelectorAll
// *****************************************
// DOM = Document Object Model
// 3 étapes :
// - l'apprentissage du selecteur (comment selectionner un élement)
// - l'événement (sur quel événement on va déclencher cette séléction)
// - la manipulation ( comment faire des opérations, modifications etc...)
// SELECTEUR BY ID
var monId = document.getElementById("maSection")
console.log("monId : " + monId);
console.log("monId : " + monId.innerHTML);
// SELECCTEUR BY TAG NAME
var maBalise = document.getElementsByTagName("span");
console.log("maBalise : " + maBalise);
console.log("maBalise : " + maBalise[0].innerHTML);
// SELECCTEUR BY CLASS NAME
var mesClasses = document.getElementsByClassName("avion");
console.log("typeof : " + typeof mesClasses);
console.log("mes classes : " + mesClasses);
console.log("mesClasses[0] : " + mesClasses[0].innerHTML);

var i ;
for (i=0 ; i < mesClasses.length ; i++)
{
    console.log("boucle " + i + ' : ' + mesClasses[i].innerHTML);
}

//------- Selecteur QUERYSELECTOR

var p = document.querySelector('p');
console.log('querySelector : ' + p.innerHTML);

//------- Selecteur QUERYSELECTORALL

var lesP = document.querySelectorAll('p');
console.log("querySelectorAll : " + lesP[0].innerHTML);
console.log("querySelectorAll : " + lesP[1].innerHTML);


// 3 eme partie : DOM 

//--onClick
// --dnClick
//--mouseOver
//-- blur
//-- focus
// -- submit


