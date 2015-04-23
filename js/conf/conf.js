var app = angular.module('app', ['ngRoute']);
	
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'FirstController',
			templateUrl: 'view/route1.html'
		})
		.when('/route2', {
			controller: 'FirstController',
			templateUrl: 'view/route2.html'
        })
	    .otherwise({
	        redirectTo: '/'
	    });
});