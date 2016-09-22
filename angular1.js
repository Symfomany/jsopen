// Define the `phonecatApp` module
// All lib Angular: https://cdnjs.com/libraries/angular.js/1.4.0
var phonecatApp = angular.module('phonecatApp', ['ngResource', 'firebase', 'ngRoute', 'ngAnimate']);

phonecatApp.factory('UserService', function ($resource) {
  //all services Angular: 30 services

    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"}, {update:{
          method:'PUT'
          }
      });
      return data;
		//resources :
	// 	{ 'get':    {method:'GET'},
  // 'save':   {method:'POST'},
  // 'query':  {method:'GET', isArray:true},
  // 'remove': {method:'DELETE'},
  // 'delete': {method:'DELETE'} };
});

phonecatApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller: "PhoneListController"
    })
    .when("/contact", {
        templateUrl : "contact.html",
        controller : "ContactController"
    })

});


phonecatApp.controller('ContactController', function ContactController($scope, $firebaseArray) {

  $scope.tab = ['julien','florent', 'helene', 'nicolas'];

  $scope.remove = function(e){
    $scope.tab.splice($scope.tab.indexOf(e),1);
  }

});

/*
* firebase
*
* Racheter par google 2014, On 21 October 2014, Firebase announced it had been acquired by Google for an undisclosed amount.[4] On October 13, 2015 Google acquired Divshot to merge it with Firebase team
*
*
* Firebase Auth: Firebase Auth is a service that can authenticate users using only client-side code. It supports social login providers Facebook, GitHub, Twitter and Google. Additionally, it includes a user management system whereby developers can enable user authentication with email and password login stored with Firebase.[9]

Realtime: Firebase provides a realtime database and backend as a service. The service provides application developers an API that allows application data to be synchronized across clients and stored on Firebase's cloud.[10][11] The company provides client libraries that enable integration with Android, iOS, JavaScript, Java, Objective-C and Node.js applications. The database is also accessible through a REST API and bindings for several JavaScript frameworks such as AngularJS, React, Ember.js and Backbone.js.[12] The REST API uses the Server-Sent Events protocol, which is an API for creating HTTP connections for receiving push notifications[13] from a server. Developers using the realtime database can secure their data by using the company's server-side-enforced security rules.[14]

storage: Firebase Storage provides secure file uploads and downloads for your Firebase apps, regardless of network quality. The developer can use it to store images, audio, video, or other user-generated content. Firebase Storage is backed by Google Cloud Storage, a powerful, simple, and cost-effective object storage service.[15]

Notifications: Firebase Notifications is a free service that enables targeted user notifications for mobile app developers.[21]
 */

/**
 * Setup with Firebase: Begin integration
 */
// https://firebase.google.com/docs/web/setup

// Authorization in dashboard security:
// {
//   "rules": {
//     "foo": {
//       ".read": true,
//       ".write": false
//     }
//   }
// }
//
// si il doit detre connecté avec  FIrebase:
// {
//   "rules": {
//     "users": {
//       "$user_id": {
//         ".write": "$user_id === auth.uid"
//       }
//     }
//   }
// }

// Data Validation


// AUthentification

/**
 * Configurayion via AUth:
 * FB : cxére une app:
 */


//
// https://devdactic.com/improving-rest-with-ngresource/
// Line pr commencer: https://www.firebase.com/docs/web/guide/retrieving-data.html
// BBD de test.
// https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts
// Payant pour les personnes:
// https://firebase.google.com/pricing/
// 100 connexions, 1GB storage, 10gb telecharger, pas de backups, stockage de fichier 5GB
// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope, UserService, $firebaseArray) {

  // Begin...
  // https://www.firebase.com/docs/web/guide/retrieving-data.html


  // Get a database reference to our posts
  // Connexion
  // var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
  //
  // // Create a callback which logs the current auth state
	var ref = firebase.database().ref();
  var provider = new firebase.auth.TwitterAuthProvider();

  // var provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday');

  //twitter oauth
  // firebase.auth().signInWithPopup(provider).then(function(result) {
  //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   console.log(user);
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   console.log(errorCode, errorMessage, email, credential);
  // });

  // facebook app auth
  // var provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday,public_profile,user_friends,email,user_about_me,user_photos'); // permissions: https://developers.facebook.com/docs/facebook-login/permissions/
  // firebase.auth().signInWithPopup(provider).then(function(result) {
  //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   console.log(user);
  //   // ...
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   console.log(errorCode, errorMessage);
  // });


  //create an user for authentification...
  // firebase.auth().createUserWithEmailAndPassword("juju@free.fr", "123456789").catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

  // AUthentification
//   firebase.auth().signInWithEmailAndPassword("juju@yahoo.fr", "123456789").catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorCode, errorMessage);
// });

// Deconnexion...
// firebase.auth().signOut().then(function() {
// //  Sign-out successful.
// }, function(error) {
//   // An error happened.
// });

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });
//
//     // Create a callback which logs the current auth state
// function authDataCallback(authData) {
//   if (authData) {
//     console.log("User " + authData.uid + " is logged in with " + authData.provider);
//   } else {
//     console.log("User is logged out");
//   }
// }


  // Attach an asynchronous callback to read the data at our posts reference
// This function will be called anytime new data is added to our database reference
// used to read a static snapshot of the contents at a given database path, as they existed at the time of the read event
//value is one of the five different event types listed below that we can use to read data from the database.
  ref.on("value", function(snapshot) {
    console.log("Valeuuur ajoutéeeeee!!");
    ///A snapshot is a picture of the data at a particular database reference at a single point in time
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });




//  BEST PRACTICIES Architecture Datas
// https://firebase.google.com/docs/database/web/structure-data

// + Flatten data structures : applatir les données: users, messages, group...
// + pas de nested datas

/**
 * Save Data on the Web
 */

// Methodes dispnibles:
// + set()	Write or replace data to a defined path, such as users/<user-id>/<username>.
// + push()	Add to a list of data. Every time you call push(), Firebase generates a unique key that can also be used as a unique identifier, such as user-posts/<user-id>/<unique-post-id>.
// + update()	Update some of the keys for a defined path without replacing all of the data.
//+ transaction()	Update complex data that could be corrupted by concurrent updates.


//
//
// // Value : Evenement de Firebase
// // It is triggered once with the initial data and again every time the data changes.The event callback is passed a snapshot containing all data at that location, including child data
//
//
// // Retrieve new posts as they are added to our database
// ref.on("child_added", function(snapshot, prevChildKey) {
//   var newProfil = snapshot.val();
//   console.log("Email: " + newProfil.email);
// });
//
// // Retrieve new posts as they are added to our database
// ref.on("child_changed", function(snapshot) {
//   var newProfil = snapshot.val();
//   console.log("Profil modifiééé: " + newProfil.email);
// });
//
// // Get the data on a post that has been removed
// ref.on("child_removed", function(snapshot) {
//   var deletedPost = snapshot.val();
//   console.log("The profil removed is '" + deletedPost.email + "' has been deleted");
// });
//
// //Detaching Callbacks: ref.off()
// //Reading Data Once: ref.once()
// // Querying Data
// //orderByChild(), orderByKey(), orderByValue(), or orderByPriority().
// // limitToFirst(), limitToLast(), startAt(), endAt(), and equalTo()
// // bdd beautiful : https://dinosaur-facts.firebaseio.com/
// // orderByChild: trié par une colonne
//
// var elodie = ref.child(0).child("email").on("value", function(stegosaurusHeightSnapshot) {
//
//
// }


// Structured database

// https://www.firebase.com/docs/web/guide/structuring-data.html

// Par l'url, accès aux données en profondeur: https://docs-examples.firebaseio.com/web/org/users/mchen/groups/alpha

	//https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html
/**
 * Depth of child nodes: 32
 * Length of a key: 768 bytes
 * Size of one child value: 10mb
 * Write from SDK: 16mb
 * Nodes in a read operation: 100 million
 */





 	var query = ref.orderByChild("prenom").limitToFirst(4); //always 4
 	$scope.data = $firebaseArray(query);

	$scope.remove = function(phone){
		$scope.phones.splice($scope.phones.indexOf(phone),1);
	};

	$scope.removeMess = function(message){
		$scope.data.$remove(message);
		var item = $scope.data.$getRecord(1);
		item.prenom = "Sissoko";
		$scope.data.$save(item)
	};

	$scope.add = function(){
		$scope.data.$add({
			email : "zuzu@meesterious.com",
			nom : "Boyeree",
			prenom : "Juliennne"
		});
	};

	// UserService.save({name: 'Saimon', email: 'saimon@devdactic.com'});
	// UserService.update({user: 1}, {name: 'Saimon', email: 'saimon@devdactic.com'});

  // $scope.phones =  UserService.query();

	// console.log(UserService.get({user: 1}));
});




phonecatApp.filter('ago', function(){
        return function(input){
					moment.locale('fr');
					var dateTime = new Date(input);
					dateTime = moment(dateTime).fromNow();
					return dateTime;
        };
});
