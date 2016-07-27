											// dependencies
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

// prep code that runs before app runs (ex. routing)
myNinjaApp.config(['$routeProvider', function($routeProvider){
// myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

// $locationProvider.html5Mode(true);

	$routeProvider
		.when('/home', {
			templateUrl: "views/home.html",
			controller: "NinjaController"
		})
		.when('/contact', {
			templateUrl: "views/contact.html",
			controller: "ContactController"
		})
		.when('/contact-success', {
			templateUrl: "views/contact-success.html",
			controller: "ContactController"
		})
		.when('/directory', {
			templateUrl: "views/directory.html",
			controller: 'NinjaController'
		}).otherwise({
			redirectTo: '/home'
		});
	}]);

// myNinjaApp.run(function(){

// });

// custom directive
myNinjaApp.directive('randomNinja', [function(){

	return {
		// use only as element (can also do attribute)
		restrict: 'E',
		scope: {
			ninjas: '=',
			title: '='
		},
		templateUrl: "views/random.html",
		// allow content to be nested inside directive
		transclude: true,
		// replace directive/element name with outermost element of view
		replace: true,
		controller: function($scope){
			$scope.random = Math.floor(Math.random() * 4);
		}
	};

}]);

myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

	$scope.removeNinja = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1);
	};

	$scope.addNinja = function(newninja){
		$scope.ninjas.push({
			// build ninja object
			name: $scope.newninja.name,
			belt: $scope.newninja.belt,
			rate: parseInt($scope.newninja.rate),
			available: true
		});

		// clear out fields after input
		$scope.newninja.name = "";
		$scope.newninja.belt = "";
		$scope.newninja.rate = "";
	};

	$scope.removeAll = function(){
		$scope.ninjas = [];
	};

	$http.get('data/ninjas.json').success(function(data){
		$scope.ninjas = data;
	});

	// console.log(angular.toJson($scope.ninjas));

}]);

// controller for contact success
myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

	$scope.sendMessage = function(){
		$location.path('/contact-success');
	};

}]);




