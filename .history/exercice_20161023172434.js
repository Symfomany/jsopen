/**
 * Best practrices IIFE 
 * La fonction anonyme appelée immédiatement en Javascript
 * https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 * Un des gros soucis en JS, c’est qu’il dépend beaucoup des variables globales
 * Pour limiter ce problème, on utilise la technique de la fonction anonyme immédiatement appelée. 
 * Se note également:
 * ;(function(alias){
    "use strict";
 */
(function(){

    var maVariable = 123; 

    /*
     * Code plus propre
     * Le JavaScript est très permissif.
     */

    "use strict";


})();
