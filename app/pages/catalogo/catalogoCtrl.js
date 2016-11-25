(function(){
	'use strict';

	angular.module('Portalshop.pages.catalogo')
		.controller('catalogoCtrl', catalogoCtrl);

	function catalogoCtrl($scope, $http) {
		$scope.productos= {};
		$scope.getAll = function(){
    		$http.get("app/crud/read_productos.php").success(function(response){
    			$scope.productos = response.records; 
    			console.log($scope.productos);
    		});

    }
		

//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html

	}


})();