app.controller('FirstController', function($scope){

	$scope.projects = [
		{ name: 'Project 1' },
		{ name: 'Project 2'	},
		{ name: 'Project 3' }
	];

	$scope.addProject = function() {
		$scope.projects.push({ 
			name: $scope.newProject.name
		});
	    $scope.newProject.name = ''
    };

	$scope.items = [
		{ name: 'Languages' },
		{ name: 'Translators' },
		{ name:'Settings' }
	];	
	$scope.addItem = function() {
		$scope.items.push({ 
			name: $scope.newItem.name
		});
		$scope.newItem.name = ''
	};

	$scope.products = [
		{
		title: 'Product 1',
		date: new Date('2015', '06', '03'), 
		price: 55,
		likes: 0,
		dislikes: 0
		},
		{
		title: 'Product 2',
		date: new Date('2015', '03', '01'), 
		price: 44,
		likes: 0,
		dislikes: 0
		},
		{
		title: 'Product 3',
		date: new Date('2015', '03', '23'), 
		price: 33,
		likes: 0,
		dislikes: 0
		}
	];

	$scope.plusOne = function(index) { 
 		$scope.products[index].likes += 1;
  	}

  	$scope.minusOne = function(index) { 
  		$scope.products[index].dislikes += 1;
	}
	
});