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
 */
(function(){

    var maVariable = 123; 

    /*
     * Code plus propre
     * Le JavaScript est très permissif.
     */

    "use strict";


})();
