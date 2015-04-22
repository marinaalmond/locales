<script>
		
	var app = angular.module('app',[])
		app.controller('FirstController',function($scope) {
			$scope.projects= [
				{ name: 'Project 1' },
				{ name: 'Project 2' },
				{ name: 'Project 3' }
			];
			$scope.addProject = function() {
				$scope.projects.push({ 
					name: $scope.newProject.name
			<!-- kako da input gde se unosi novi projekat da nakon unosa ponovo bude prazan? -->		
				});
			};		
		});				
</script>
	