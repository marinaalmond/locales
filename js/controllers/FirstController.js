app.controller('FirstController', function($scope){

	$scope.projects= [
		{ name: 'Project 1' },
		{ name: 'Project 2' },
		{ name: 'Project 3' }
	];

	$scope.addProject = function() {
		$scope.projects.push({ 
			name: $scope.newProject.name
		});
	    $scope.newProject.name = ''
    };

	$scope.items= [
		{ name: 'Languages' },
		{ name: 'Translators' },
		{ name:'Settings' }
<<<<<<< HEAD
	];	
	$scope.addItem = function() {
		$scope.items.push({ 
			name: $scope.newItem.name
		});
		$scope.newItem.name = ''
=======
	];
    $scope.addItem=function() {
		$scope.items.push({ 
			name: $scope.newItem.name
		});
		$scope.newItem.name = '';
>>>>>>> 38f1074e97b8050080e29f99f6f04463631e3824
	};
});