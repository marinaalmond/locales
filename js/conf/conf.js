<script>
	var projmodule = angular.module('app',['ngRoute']);
		
	projmodle.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/route1',
				{
					controller: 'FirstController',
					templateUrl: 'View1.html'
				})
				.when('/route2',
				{
					controller: 'FirstController',
					templateUrl: 'View2.html'
	            }).
                otherwise({
                    redirectTo: '/'
                });
			});	
				
</script>