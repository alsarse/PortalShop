(function(){
	'use strict';

	angular.module('Portalshop.pages.catalogo')
		.controller('catalogoCtrl', catalogoCtrl);

	function catalogoCtrl($scope, $http, $location) {
				
		$scope.getAll = function(){
    		$http.get("app/crud/read_productos.php")
    		.success(function(response){
    			$scope.productos = response.records; 
    			console.log($scope.productos);
    		});
    	}

    	$scope.searchingMode = function($event){
    		if($event.keyCode==13){
    			$location.path('/catalogo');
    		}
    	}
 
//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html

	}


})();