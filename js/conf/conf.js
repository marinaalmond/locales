
var app = angular.module('app', ['ngRoute']);
	
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'FirstController',
			templateUrl: 'view/route1.html'
		})
	    .otherwise({
	        redirectTo: '/'
	    });
});