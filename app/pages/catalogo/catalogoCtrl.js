(function(){
	'use strict';

	angular.module('Portalshop.pages.catalogo')
		.controller('catalogoCtrl', catalogoCtrl);

	function catalogoCtrl($scope, $http) {

		$http.get('app/pages/catalogo/productos.php').then(successCallback, errorCallback);

//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html

		function successCallback(response){
			$scope.productos= response.data;
			console.log($scope.productos); 
		}	
		function errorCallback(response){
			console.log("ERROR")	
		}
	}


})();