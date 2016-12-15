(function(){
	'use strict';

	angular.module('Portalshop.pages.home')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl($scope, $rootScope, $http) {

		$scope.user="";

		$http.get('app/crud/get_session.php')
			.success(function(response){
				$scope.user = response;
			});

		$scope.news= [];
		$scope.sales= [];

		$http.get('app/crud/read_productos.php')
			.success(function(response){
				for(var i=0; i<response.records.length; i++){
					if(response.records[i].new>0){
						$scope.news.push(response.records[i]);
					}
					if(response.records[i].sale>0){
						$scope.sales.push(response.records[i]);
					}
				}
			console.log($scope.news);
		});
		
	}

	

//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html


})();