

document.write("<h2>tableaux</h2>");


document.write("<h2>Les tableaux array</h2>");
var liste_fruits = ['banane', 'orange', 'framboise', 'fraise', 'kiwi','cerise'];
document.write(liste_fruits.join('_')+ "<br>");
for(var i =0; i< liste_fruits.length; i++){
    document.write(liste_fruits[i] + "<br>");
}
document.write(i);
var k =0;
document.write("boucle while <br>");
while(k < liste_fruits.length){
    document.write(liste_fruits[k] + "<br>");
    k++
}
//propriéte qui me permete de connaitre la longueur de mon tableu
//liste_fruits.lenght

document.write("<h2>Fonctions utilisateurs et predefinies</h2>");
var phrase = "BONSOIR";
document.write(phrase.toLowerCase() + "<br>");//bonsoir
function afficher(){
    document.write('Hello World'+"<br>");
}
afficher();
function d(arg){
    document.write(arg + "<br>");
}
d("Salut Yassine");
d("Salut Rachid");
d(2);
d("Salut Yassine" + "Salut Mohamed");
function toto(){
    var nombre = 99;
    return nombre;
}
toto();//99
var nouveauNombre = toto();
document.write("" + nouveauNombre)//
function plusieursParam(prenom, nom, age){
    document.write("Bonjour " + prenom + " " + nom + " tu as : " + age + " ans<br>");
}
plusieursParam("Yassine", "JAAGOUB", 32);
plusieursParam("Samir", "MOURAD", 49);
//déclarer une fonction qui calcule le prix TTC d'un article
//TVA = 19.6
//prixTTC(399) ---> 477,204
//prixTTC(14.99) ---> 17,92804
//afficher le prix arrondie à 2 chiffres après la virgule. il existe une fonction
//prédéfinie (à chercher sur google)
function prixTTC(prix)
{
    prix = prix * 1.196;
    return Math.round(prix * 100) / 100;
}
document.write(prixTTC(399) + "<br>");
document.write(prixTTC(14.99) + "<br>");
var maFunction = function () {
    document.write('nous somme jeudi <br>');
}
maFunction();
//IIFE Immediatly Invoked Functions Expressions
(function(){
    document.write('cette fonction est anonyme et automatiquement executé <br>');
})();
var animal = "chien";
function test(){
    document.write(animal + "<br>");
}
test();
function test2(){
    animal2 = "chat";
    document.write(animal2 + "<br>");
}
test2();
document.write(animal2 + "<br>");
document.write("<h2>Object</h2>");
var monObjet = {};
monObjet.prenom = 'Yassine';
monObjet.nom = 'JAAGOUB';
document.write(monObjet.prenom + "<br>");
var Homme = {
    nom : 'Winter',
    prenom : 'Thomas',
    age : 35
};
document.write(Homme.prenom);
//déclaration d'un Objet
var Voiture = {
    marque : 'mercedes',
    modele : 'class A',
    couleur : 'noir',
    changeDeCouleur : function(nouvelle){
        return this.couleur = nouvelle;
    },
    optionsDeSerie : ['clim', 'autoradio', 'park-assist'],
    annee : 2020,
    motorisation : {
        energie : 'diesel',
        puissance : '110cv'
    }
};
document.write(Voiture.couleur + "<br>");//noir
Voiture.changeDeCouleur("rose");
document.write(Voiture.couleur + "<br>");//rose
document.write(Voiture.optionsDeSerie[0] + "<br>");//clim
document.write(Voiture.motorisation.energie + "<br>");//diesel
//foreach
for(var element in Voiture){
    document.write(element + ":" + Voiture[element] + "<br>");
    if(typeof Voiture[element] === "object") {
        for(var elementB in Voiture.motorisation){
            document.write(elementB + ":" + Voiture.motorisation[elementB] + "<br>");
        }
    }
}
//déclaration d'une Class en JS
function Animal(nom, espece, categorie, age){
    this.nom = nom;
    this.espece = espece;
    this.categorie = categorie;
    this.age = age;
}
var dauphin = new Animal('Flipper', 'Dauphin', 'mammifere', 3);
document.write(dauphin.nom);//Flipper
function Contact(nom, prenom, adresse, age){
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.age = age;
}
var contact1 = new Contact('JAAGOUB', 'Yassine', '36 rue de la maladrerie', 32);
document.write(contact1.adresse);
//Prototypage : ajouter une fonction à un objet.
function Vehicule(marque){
    this.marque = marque;
}
var megane = new Vehicule('Renault');
megane.demarrer = function() {
    document.write('vroom vroom je démarres <br>');
};
megane.demarrer();



