											// dependencies
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

// prep code that runs before app runs (ex. routing)
myNinjaApp.config(['$routeProvider', function($routeProvider){

$routeProvider
	.when('/home', {
		templateUrl: "views/home.html"
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

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

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

	$scope.ninjas = [
		{
			name: "Yoshi",
			belt: "green",
			rate: 50,
			available: true,
			thumb: "content/img/yoshi.png"
		},
		{
			name: "Crystal",
			belt: "yellow",
			rate: 30,
			available: true,
			thumb: "content/img/crystal.png"
		},
		{
			name: "Ryu",
			belt: "orange",
			rate: 10,
			available: true,
			thumb: "content/img/ryu.png"
		},
		{
			name: "Shaun",
			belt: "black",
			rate: 1000,
			available: true,
			thumb: "content/img/shaun.png"
		}
	];

}]);