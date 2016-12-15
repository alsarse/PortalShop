(function(){
	'use strict';

	angular.module('Portalshop.pages.cart')
		.controller('cartCtrl', cartCtrl); 


	function cartCtrl($scope , cartService){
		
		$scope.cart = cartService.getCart();


		
		console.log($scope.cart);

		$scope.count= function(){
			return $scope.cart.length; 
		}
					
	}
	
})();