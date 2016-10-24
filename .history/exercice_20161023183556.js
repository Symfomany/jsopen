/**
 * Rappel de Atom, ouvertuire de Visual Studio Code 
 * Rappel de la Doc
 * Rappel variables, tableaux, fonctions
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

   // F<onctions
   var maPhrase = "okayy";
   function message(){

       var maPhraseSeconde = "okayy";
       alert(maPhrase)
   }
       alert(maPhraseSeconde)
   message();




})();
