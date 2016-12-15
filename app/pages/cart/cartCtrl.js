(function(){
	'use strict';

	angular.module('Portalshop.pages.cart')
		.controller('cartCtrl', cartCtrl); 


	function cartCtrl($scope , cartService){
		
		$scope.cart = cartService.getCart();

		$scope.clean = function(){
			$scope.cart = cartService.clean(); 	
		}

		
		console.log($scope.cart);

		$scope.count= function(){
			return $scope.cart.length; 
		}
					
	}
	
})();