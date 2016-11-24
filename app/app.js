

'use strict';
		

var app = angular.module('Portalshop', [
	'ui.router',
	'Portalshop.pages',
	'Portalshop.components'
	]);



 
app.controller('PortalshopCtrl', PortalshopCtrl); 


function PortalshopCtrl ($scope, $http){
		
		$http.get('app/pages/catalogo/productos.php').then(successCallback, errorCallback);
		function successCallback(response){
			$scope.productos= response.data.prod;
			console.log($scope.productos); 
		}
		function errorCallback(response){
			
		}

}


