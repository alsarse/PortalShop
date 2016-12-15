(function(){
	'use strict';

	angular.module('Portalshop.components.navbar')
		.controller('navbarCtrl', navbarCtrl);

	function navbarCtrl($scope, $http, $location){
		
	
		$scope.logout= function(){
			$http.get("app/crud/logout.php")
				.success(function(response){
					location.reload();
				});
		}

		$scope.searchingMode = function($event){
    		if($event.keyCode==13){
    			$location.path('/catalogo');
    		}
    	}

	}

})();