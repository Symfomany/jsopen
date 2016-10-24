// ES5: directive prupose   be executed in "strict mode".
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable
// Future reserved keywords are not allowed in strict mode.
/*
implements
interface
let
package
private
protected
public
static
yield
*/

//var foo = require('./foo');

var classe = require('./essai');
console.log("ok");



/*
var async = require('async');
console.log(foo(5))
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));



async.parallel([
    function(){ 
        var i = 0;
        console.log("Debut One...");
        setTimeout(function(){
            i++;
            console.log("I est de " + i);
        }, 2000)
     },
    function(){ 
        console.log("Debut Two...");
        var j = 0;
        setTimeout(function(){
            j++;
            console.log("J est de " + i);
        }, 2000)
     }
], function(){
    console.log("Terminé");
});

*/

/*


myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}
*/

// "use strict";
// variableMalDéclarée = 17; // lève une ReferenceError
// var o = { p: 1, p: 2 }; // !!! erreur de syntaxe
// console.log(o);


//
// console.log('ok');
// console.log(typeof  4.5)
// console.log(typeof  null)
// console.log(8 * null)
// console.log(false  == 0)
//
//
// function strict(){
//   // Syntaxe en mode strict au niveau de la fonction
//   'use strict';
//   function nested() { return "Ho que oui, je le suis !"; }
//   return "Allô ! Je suis une fonction en mode strict ! " + nested();
// }
// function notStrict() { return "Je ne suis pas strict."; }

// var  theNumber = Number(prompt ("Pick a number", ""));
// alert ("Your  number  is the  square  root of " +theNumber * theNumber);

// function  fac(n){
//   if (n == 0)
//   return  1;
//   else
//   return  fac(n - 1) * n;
// }
// console.log(fac (100));

//array and object undefiend
// var empty = [];
// var numbers = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine'];
// // console.log(mav);
// console.log(empty[1]);
 // undefinednumbers[1]        // 'one'empty.length      // 0numbers.length    // 10
// var numbers_object = {
// 	'0': 'zero',  '1': 'one',
// 	'2': 'two',   '3': 'three',
//   '4': 'four',  '5': 'five',
// 	'6': 'six',   '7': 'seven',
// 	'8': 'eight', '9': 'nine'
// 	};
// console.log(numbers_object.ok);

// var myMammal = {
// 	name : 'Herb the Mammal',
// 	get_name : function ( ) {
// 		return this.name;
// 	},
// 	says : function ( ) {
// 		return this.saying || '';
// 	}
// };
// console.log(myMammal.get_name());

// var add = function (a, b) {
// 	    if (typeof a !== 'number' || typeof b !== 'number') {
// 				throw {
// 					name: 'TypeError',
// 					message: 'add needs numbers'
// 				};
// 			}
// 			return a + b;
// }
//
// var try_it = function ( ) {
// 	try {
// 		add("seven");
// 	} catch (e) {
// 		document.writeln(e.name + ': ' + e.message);
// 		console.log("je peux continuer...");
// 	}}
//
// try_it();

// Module
// var serial_maker = function () {
// 	// Produce an object that produces unique strings.
// 	// A// unique string is made up of two parts: a prefix// and a sequence number.
// 	// The object comes with// methods for setting the prefix and sequence
//
// // number, and a gensym method that produces unique//
// 	 var prefix = '';
// 	 var seq = 0;
//
// 	 return {
//
// 		 seq: seq,
//      set_prefix: function (p) {
//          prefix = String(p);
// 		 },
// 		 set_seq: function (s) {
// 				 seq = s;
// 		 },
// 		 gensym: function ( ) {
//           var result = prefix + seq;
// 					seq += 1;
// 					return result;
// 			}
// 		};
// };
// console.log(serial_maker.set_prefix(5));

// scoping et etat généraut
// var foo = function () {
//    var a = 3, b = 5;
// 	 console.log(a,b);
//    var bar = function ( ) {
// 	     var b = 7, c = 11;
// 			 // At this point, a is 3, b is 7, and c is 11
//         a += b + c;// At this point, a is 21, b is 7, and c is 11
// 				console.log(b,c,a);
//    };// At this point, a is 3, b is 5, and c is not defined
// 	 bar( );// At this point, a is 21, b is 5
//  };
// foo();

// CLosure
// var myObject = function ( ) {
//     var value = 0;
// 		// etat à 0
// 		return {
// 			increment: function (inc) {
// 				value += typeof inc === 'number' ? inc : 1;
// 			},
// 			getValue: function ( ) {
// 				return value;
// 			}
// 		};
// }();
//
// myObject.increment();
// console.log(myObject.getValue());
// myObject.increment();
// myObject.increment(2);
// console.log(myObject.getValue());




// getElement('myBoxDiv')
// .move(350, 150)
// .width(100)
// .height(100)
// .color('red')
// .border('10px outset')
// .padding('4px')
// .appendText("Please stand by");
// .on('mousedown', function (m) {
// 	 this.startDrag(m, this.getNinth(m));
//  })
//  .on('mousemove', 'drag')
//  .on('mouseup', 'stopDrag')
//  .later(2000, function ( ) {
//        this.color('yellow')
// 			 .setHTML("What hath God wraught?")
// 			 .slide(400, 40, 200, 200);
// 	 })
// .tip('This box is resizeable');
//
//
//namespace
// var MYAPP = {};
//
// MYAPP.stooge = {    "first-name": "Joe",    "last-name": "Howard"};MYAPP.flight = {    airline: "Oceanic",    number: 815,    departure: {        IATA: "SYD",        time: "2004-09-22 14:55",        city: "Sydney"    },    arrival: {        IATA: "LAX",        time: "2004-09-23 10:42",        city: "Los Angeles"    }};

// var flight = {
// 	airline: "Oceanic",
// 	number: 815,
//   departure: {
// 		 IATA: "SYD",
// 		 time: "2004-09-22 14:55",
//      city: "Sydney"
// 	 },
// 	 arrival: {
// 		  IATA: "LAX",
// 			time: "2004-09-23 10:42",
// 			city: "Los Angeles"
// 		}
// };
// for (var variable in flight) {
// 		console.log(variable);
// }
// delete flight.number;
// console.log(flight.number, flight.departure.city, flight['number']);
//
// console.log(typeof flight.number, typeof flight.status, typeof flight.arrival, typeof flight.manifest);
// console.log("a" + "b" === "ab");
 //http://fr.slideshare.net/jollivetc/javascript-pour-le-dveloppeur-java?qid=980a02b1-66cc-4fd8-b202-8c1441cf5b5c&v=&b=&from_search=4

// var val;
//
// if (val === undefined) {
// 	console.log("null");
// }

// var alpha = undefined
// if (alpha) {
// 	console.log(typeof alpha);
// 	console.log(alpha)
// }
// var alpha = null
// if (alpha) {
// 	console.log(typeof alpha);
// 	console.log(alpha)
// }
//
// alpha = 2
// console.log(alpha);
// console.log(typeof alpha);
// console.log(2=="2"); //correction du typage automatioque
// console.log(2==="2");

// var traitement = function(){
// 	var that = this;
// 	return function(data){
// 		return that.data = data;
// 	};
// }

// console.log(traitement()("okk"));
// console.log(this); //polutipn espace global
// var dog = {
// 	name: "Médor",
// 	sayHello: function(count){
// 		for (var i = 0; i < count; i++) {
// 			console.log("Ouarf");
// 		}
// 		console.log("Je suis un chien qui s'appelle " + this.age);
// 	}
// }

// dog.sayHello(5);
//
// var cat = {
// 	name: "Felix",
// 	age: 15
// }
//
// var sayHello = dog.sayHello
// sayHello.apply(cat, [2]) //sorti du contexte un objet pour en executer un autre avec apply
 // changer le this par un objet

// var nom;
// // par derreur
// function test(nom){
// 	console.log(nom);
// };
// test("okkk", "laaa")
// test()

// console
// console.warn("Debogage...")

//table
// var fruits = [
//   { name: "Kiwi", vitamine: "C" },
//   { name: "Mangue", vitamine: "A" },
//   { name: "Cassis", vitamine: "E" }
// ];
// console.table(fruits); // utile pour deboger une collection d'objets

// nb1 = 15.99
// nb2 = 15.99
// var nb3;
// console.log(nb1 + nb2) // multiplicationd e chaine
// // console.log(nb1 * nb2) // multiplicationd e chaine
// console.log(nb3) // type undefined
//
// //scope + const
// const chaine = "Bonjour"
// function dire(){
// 	chaine ="Autre"
// 	alert(chaine)
// }
// // dire();
//
//
// var p = {
// 	id: "box",
// 	content: "Mon super texte",
// 	size: 50,
// 	dire: function(){ dire() }
// };
//
// // reference
// var p2 = p;
// p2.id = "box2"
// console.log(p);
// // tandis que...
// var alpha = "coucou"
// beta = alpha
// beta = "test"
// console.log(alpha)
//
//
//
// // avant ES6
//
// function Personne(name, surname){
// 	this.name = name
// 	this.surname = surname
// 	this.dire = function(){
// 		return this.name;
// 	}
// }
//
// var people = new Personne("Boyer", "Juju")
// console.log(people, people.dire());
//
//
//
// var addition = function(nombre, nombre2){
// 	return nombre + nombre2;
// }
//
// var joli = function(nombre){
// 	return "Le resultat jolie est de " + nombre + "€ et avec TVA : " + nombre * 1.196
// }
//
//
// var test = function(fct1, fct2){
// 	return fct2(fct1(5, 5))
// };
//
// console.log(test(addition, joli))

//
// var tableau = [1,3,6]
// var objet = {
// 	title: 'Okay sa va...',
// 	alpha: 'super'
// }
//
// var collection = [
// 	{
// 	title: 'Okay sa va...',
// 	alpha: 'super'
// 	},
// 	{
// 	title: 'Laaaa !! ',
// 	alpha: 'super'
// 	},
// 	{
// 	title: 'Ici :)',
// 	alpha: 'super'
// 	},
// ]
//
//
// for(elt in objet){
// 	console.log(elt);
// }
//
// for(elt of tableau){
// 	console.log(elt);
// }
//
//
// for(elt in collection){
// 	console.log(elt);
// }
//
// for(elt of collection){
// 	for(el in elt){
// 		console.log(el);
// 	}
// }
//
//
// var add = function(a,b){
// 	c = b || 10
// 	return a  + c
// }
// console.log(add(2,3));
// console.log(add(2));

//scope
// var a = 5
// function coucou() {
// 	var b = 10
// 	console.log(a);
// }
// coucou();
// console.log(b);

//CLosure
// + fonction objet avec nom + body + context
// var names = ['JUlien', 'Boyer','Coeur']
//
// var reformat = function(i){
// 	return "Resultat : " + names[i]
// }
// console.log(reformat(2));

// Pollution dans le globale state
// var reformat = function(){
// 	var names = ['JUlien', 'Boyer','Coeur']
// 	throw "Too big";
// 	// return function(n){
// 	// 	return names[n]
// 	// }
// }


// try {
// 	reformat(2);
// } catch (e) {
// 	console.log(e);
// 	console.log("Je suis une erreur capturée...");
// 	console.log("MAis je peut continuer...:)");
// } finally {
//
// }
// Separation de code (Separation of concern)
// var myNamespace  = myNamespace || {}
//
// myNamespace.uneValeur = 'Jug'
// myNamespace.sayHello = function(){
// 	console.log(this.uneValeur);
// }
// myNamespace.sayHello()
//
// IIFE : Immediately Invoked Function Expression
// fonction executée au chargement du script qui renvoie des fonction, variable


// var Namespace = (function(){
//
// 	// ...
// 	var elt = "coucou"
// 	var julien = "boyer"
// 	function coucou(){
// 			return "alpha";
// 	}
// 	return {
// 		elt: elt,
// 		julien: julien
// 	}
//
// })();
//
// console.log(Namespace.elt);
// console.log(elt);


// callback : fonction en paramètre
//

//  var callback = function(anotherFunction, chaine){
// 	 return anotherFunction(chaine)
//  }
//
//
// var resultat = callback(
// 	function(chaine){ return "La chaine est " + chaine},
//   "La plus belle");
//
// console.log(resultat);
//
// Promess : deisgn pattern 2 callback
// 3 paralmetre: success callback, failure callback and progress callback
// 3 etats possibles: unfufilled or pending, fullfilled or resolved, failed or rejected
//
// function aynchrone(success, callbakSuccess, callbakError){
// 	// traitement...
// 	if(success){
// 		callbakSuccess();
// 	}else{
// 		callbakError();
// 	}
// }
// aynchrone("Hello",
// function(){
// 	console.log('Promess reussie!!!');
// },
// function(){
// 	console.log('Promess echouée ..  :(');
// });
//
// // Pyramide de doom
// aynchrone("Hello",function(){
// 	console.log('Promess reussie!!!');
// 	aynchrone("World", function(){
// 		console.log('Promess encore reussie!!!');
// 		aynchrone("!!", function(){
// 			console.log('Promess encore et encore reussie!!!');
// 		});
// 	})
// })

//
// function aynchrone(success){
// 	var deferred = $q.defer();
// 	if(success){
// 		deferred.resolve(result)
// 	}else{
// 		defer.reject(errorMessage)
// 	}
// 	return deferred.promise();
// }
//
// aynchrone(true);
