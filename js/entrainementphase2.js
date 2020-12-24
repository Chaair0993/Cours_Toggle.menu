
document.write("<h2>Objet</h2>");



(function(){//IIFE Immediatly invoked
    document.write('cette fonction est anonyme est automatiquement exc"cut"');
})();

var animal = "ours";
function test(){
    document.write(animal + "<br>");
}

test();
/*
function test2(){
    var animal2 = "loup";
    document.write(animal2 + '<br>');
}
*/
/*
test2();
document.write(animal2 + "<br>")*/

//document.write("<h2>Objet</h2>");
/*
var monObjet = {};//syntaxe objet
// syntaxe poibnt
monObjet.prenoms='yassine';
monObjet.nom = 'JAAGOUB';

document.whrite(monObjet.prenom + "<br>")

// pour affecter c'est :
var Homme = {
    nom: 'Winter',
    prenom: 'Thomas',
    age: 35
};
document.write(Homme.prenom);*/

var Voiture = {
    marque : 'mercedes',
    modele : 'classe A',
    couleur : 'noir',
    changeDeCoueleur : function(nouvelle){
        return this.couleur = nouvelle;
    },
    optionDeSerie : ['clim', 'autoradio', 'park-assist'],
    annee : 2020,
    motorisation : {
        energie : 'diesel',
        puissance : '250cv'
    }
}

document.write(Voiture.couleur + '<br>');//noir
Voiture.changeDeCoueleur("rose");
document.write(Voiture.couleur + '<br>')//rose
document.write(Voiture.optionDeSerie[0] + '<br>');//clim
document.write(Voiture.motorisation.energie + '<br>');//


// di je veut aller chercher tout mes element
for(var element in Voiture){//Foreach
    document.write(element + ":" + Voiture [element] + "<br>");
    if(typeof Voiture[element] === 'objet'){
        for(var elementB in Voiture.motorisation){
            document.write(elementB + ":" + Voiture.motorisation[elementB] + '<br>');
        }
    }
}
//this renvoie a un animal
function animal(nom, espece, categorie, age){
    this.nom = nom;
    this.espece = espece;
    this.categorie = categorie;
    this.age = age;
}
/*
var ours = new Animal('Grizzly', 'Dauphin', 'Mammifere', 3);
document.write(ours.nom);*/

function Contact(nom, prenom, adresse, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.age = age;
}
var contact1 = new Contact("Venom", "Snake", "36 rue de la maladrerie", 29);
document.write(contact1.adresse);

//PROTOTYPAGE Ajouter une fonctioon a un objet

function Vehicule(marque){
    this.marque = marque;
}

var audi = new Vehicule('Renault');
audi.demarrer = function(){
    document.write('vroom vroom je démarres <br>')
}

audi.demarrer();
//Etape 1 : création d'un personnage
//créé un objet Personnage avec les propriétés suivante : nom (string),
//sante (number) et force (number).
//Etape 2 : créer une fonction (à l'interieure de mon objet) qui présente mon
//personnage ("Je suis le/la valeureux/valeureuse guerrier/guerriere "nom" du monde de
//Narnia j'ai "x" de sante et ma force de combat est de "x"
//Etape 3 : créer une fonction "attaquer" qui permet d'attaquer une "cible"
//lorsque le personnage attaque la cible, celle-ci perd 10 points de sante.
//Etape 4 : Lorsque les points de vie arrivent à 0 afficher un message qui
//indique que le personnage ciblé est mort.
//Etape 5 : modifier la fonction d'attaque pour que les dégats soit proportionnel à
//la force d'attaque de l'attaquant.
//ajouter un attribut experience un hero commence avec une experiene de jeun a 0 lorsquile tue un mechant il gagne 15 point 
function Personnage(pseudo, sante, force, experience){
    this.pseudo = pseudo;
    this.sante = sante;
    this.force = force;
    this.experience = 0;
    //hero.decrire(hero.pseudo, hero.sante, hero.force);
    this.decrire =  function (pseudo, sante, force){
        document.write("je suis le valeureux guerrier " + pseudo +
            " du monde de Narnia j'ai " + sante +
            " de sante et ma force de combat est de " + force + "<br>");
    };
    this.attaquer = function (cible){

        cible.sante = cible.sante - this.force;

        if(cible.sante <= 0)
        {
            document.write("La cible est morte <br>");
            cible.sante = 0;
            this.experience += 15;
            return cible.sante;
        };
    }  
}

var hero = new Personnage('Conan', 100, 85);
var mechant = new Personnage('Troll', 100, 20);
hero.decrire(hero.pseudo, hero.sante, hero.force);
document.write(hero.experience + '<<br>')
mechant.decrire(mechant.pseudo, mechant.sante, mechant.force);
hero.attaquer(mechant);
hero.attaquer(mechant);
mechant.attaquer(hero);
hero.decrire(hero.pseudo, hero.sante, hero.force);
mechant.decrire(mechant.pseudo, mechant.sante, mechant.force);
document.write("la sante de la cible est de : " + mechant.sante + "<br>");
document.write(hero.experience);
