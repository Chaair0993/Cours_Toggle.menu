/*

Document.getElementById('div1).onclick = div1; ==> evenement sur l'objet ,
la fonction délcarée plus loin.
document.getElementById('div1').onblur = function(){monScript}
document.getElementById('div1).addEventListener('blur', fonvtionName);
document.getElementById('div1).addEventListener("click",function(){monScript});

*/

/*SELECVTIONNER MON ELEMENT 2 EME ETAPE APPELER MON ELEMENT*/

document.getElementById('div1').addEventListener('click', div1);
document.getElementById('div5').addEventListener('dblclick', div5);
document.getElementById('div10').addEventListener('mouseover', div10);
document.getElementById('div11').addEventListener('mouseout', div11);
document.getElementById('div15').addEventListener('mousedown', div15);
/*document.getElementById('div11').addEventListener('mouseup', div15Bis);*/

function div10(){
    alert('div10 - mouseover div10');
}
function div11(){
    alert('div11 - mouseout div11');
}
function div15(){
    alert('div15 - mousedown div15');
}
function div15Bis(){
    alert('div15 - mouseup div15');
}


    //massedow quand on appuie masseup quand on lache la souri

    //evenement javascript
    document.getElementById("div14").addEventListener("submit", function(event){
        event.preventDefault();
        alert("div14 - submit")  
    })
    document.getElementById("div7").addEventListener("keydown", function() {
        var r = document.getElementById("div7");
        alert("div7 - keydown ! " + r.value);
    })
    document.getElementById("div8").addEventListener("keypress", function() {
        var r = document.getElementById("div8");
        alert("div8 - keypress ! " + r.value);
    })




    function div1(){
     document.getElementById('div1').style.background = "#08FF00";// LE STYLE ICI ON AS MODIFIER LE BGRD quand on appuie sur l'élément la couleur change donc on dit que quand on appuie la couleur change 
    }

    /*
      document.getElementById("div1").addEventListener("click", function(){
       var color = document.getElementById("div1")
       color.style.background ="#000";
    })
    */