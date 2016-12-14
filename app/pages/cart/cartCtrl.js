(function(){
	'use strict';

	angular.module('Portalshop.pages.cart')
		.controller('cartCtrl', cartCtrl); 


	function cartCtrl($scope){
		$scope.cart=[];

		$scope.count= function(){
			return $scope.cart.length; 
		}
		
		$scope.add = function(producto){
			var item = {
				name: producto.name,
				price: producto.price,
				img: producto.img,
				ud: $scope.cantidad
			}
			return item; 
		}	

		console.log($scope.cart);

	}
	
})();