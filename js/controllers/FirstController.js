app.controller('FirstController', function($scope){

	$scope.projects= [
		{ name: 'Project 1' },
		{ name: 'Project 2' },
		{ name: 'Project 3' }
	];

	$scope.addProject=function() {
		$scope.projects.push({ 
			name: $scope.newProject.name
		})
	};
	$scope.items= [
		{ name: 'Languages' },
		{ name: 'Translators' },
		{ name: 'Settings' }
	]		
});