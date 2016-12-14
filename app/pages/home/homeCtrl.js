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

		
	}

	

//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html


})();