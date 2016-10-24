/**
 * Rappel de Atom, ouvertuire de Visual Studio Code 
 * Rappel de la Doc
 * Rappel variables, tableaux, fonctions, concaténation
 * fonctions définies: parseInt(), parseFloat()
 * Ouverture: sans point virgule: NON
 * Definition d'une variables caché: NULL et undefined
 * Ne pas utiliser " mais '
 */


/**
 * Best practrices IIFE 
 * La fonction anonyme appelée immédiatement en Javascript
 * https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 * Un des gros soucis en JS, c’est qu’il dépend beaucoup des variables globales
 * Pour limiter ce problème, on utilise la technique de la fonction anonyme immédiatement appelée. 
 * Se note également:
 * ;(function(alias){
    "use strict";
    Notez le ; au début qui permet de rajouter votre script à la suite d’un autre script même si celui-ci a oublié de mettre un ; sur sa dernière ligne (utile pour les minifieurs).

    Notez aussi le "use strict"; qui dit au navigateur que tout ce qui se trouve dans cette fonction devra être traité par un parseur strict qui vous signalera plus d’erreurs de code. Cela ne s’applique qu’à la fonction, laissant le reste du monde le droit d’utiliser du code moins strict.

    Parmi les vérifications, exemple :
    Définir deux fois le même attribut dans un objet avec la notation littérale.
    Utilisation de eval().
    Utilisation de with.
    Utilisation de arguments and caller.
 *
 */
(function(){
    /*
     * Code plus propre
     * Le JavaScript est très permissif.
     */

    "use strict";


    var maVariable = 123; 
   // maVariable2 = 564; // This will cause an error because x is not declared
   // x = {p1:10, p2:20};      // This will cause an error
   // var x = 3.14;
   // delete x;                // This will cause an error
   // var x = 010;             // This will cause an error
   // var x = \010;            // This will cause an error


   // Rappel: CamelCase sur les variables

   // Fonctions Partie 1
   var maPhrase = "okayy";
   /*function message(){

       var maPhraseSeconde = "okayy";
       //alert(maPhrase) //  visibilité globale 
   }*/
      // alert(maPhraseSeconde): erreur de visibilité 
   //message();


   // Fonctions Partie 2
   // Closure...
   /*var joliMessage = function(message){
       
       return "<div class='alert alert-danger'>" + message +"</div>";
   }

   function affichage(message){
       
       return "<div class='container'>" + joliMessage(message) + "</div>" ;
   }*/


function setLocation(city) {
  var country = "France"; 

  function printLocation() {       
    console.log("You are in " + city + ", " + country);  
  }

  printLocation();
}

setLocation ("Lyon");  // output: You are in Paris, France



   // callbacks..
   /*function betterAffichage(message, html, boostrapp){
       if(html){
              // manipuler la DOM avec https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/manipuler-le-code-html-partie-1-2
            var box = document.getElementById('boxhtml');
            box.innerHTML = affichage("lol");
           return html(message);
       }else{
           var box = document.getElementById('boxhtml');
           box.innerHTML = affichage("lol");
           return boostrapp(message);
       }
   }

   var msg = 'joliie';
   /*console.log(betterAffichage('joliie', function(){
       return "<h3>"+msg+"</h3>";
   }));*/
/*   console.log(betterAffichage('joliie', null,  function(){
       return "<div class='alert alert-danger'>"+msg+"</div>";
   }));

   // manipuler la DOM avec https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/manipuler-le-code-html-partie-1-2
   var box = document.getElementById('box');
   box.innerHTML = affichage("lol");
   */



})();
