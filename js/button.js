(function(){
    var toggle = document.querySelector(".c-hamburger");
    var menu = document.querySelector("#menu-panel")
    //2 réactions: changement du bouton, ouverture du panneau
    toggle.addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle('is-active');
        //on ajoute la class show, on fait un transform: translateX(0), écriture ternaire
       (this.classList.contains("is-active") === true) ? menu.classList.toggle("show") :menu.classList.remove("show");
    });
})();