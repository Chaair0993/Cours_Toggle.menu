document.getElementById("p1").addEventListener("dblclick", function(){
    var color = document.getElementById("p1")
    color.style.background ="#CCEA27";
 })

// Ca ce'est pour changer de couleur au survol et en ressortant de la div
document.getElementById("couleurSurvol").addEventListener("mouseover", couleurSurvol);
document.getElementById("couleurSurvol").addEventListener("mouseout", couleurSurvolBis);
function couleurSurvol() {
    document.getElementById("couleurSurvol").style.background = "blue";
};
function couleurSurvolBis() {
    document.getElementById("couleurSurvol").style.background = "red";
};

/*
<div id="div_retrici"></div>
    <br>
    <input type="button" id="retricir" value="Cliquer pour changer la forme">

document.getElementById("retricir").addEventListener("mousedown", retricir);
    function retricir() {
        document.getElementById("div_retrici").style.width = "100px";
    }
    */