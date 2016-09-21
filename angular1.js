// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ['ngResource', 'firebase']);


phonecatApp.factory('UserService', function ($resource) {
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


// https://devdactic.com/improving-rest-with-ngresource/

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope, UserService, $firebaseArray) {
	var ref = firebase.database().ref();
	var query = ref.orderByChild("prenom").limitToLast(3);

	$scope.data = $firebaseArray(query);


	//https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html



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

	console.log(UserService.get({user: 1}));
});




phonecatApp.filter('ago', function(){
        return function(input){
					moment.locale('fr');
					var dateTime = new Date(input);
					dateTime = moment(dateTime).fromNow();
					return dateTime;
        };
});
