(function(){
	'use strict';

	angular.module('Portalshop.pages.cart')
		.controller('cartCtrl', cartCtrl); 


	function cartCtrl($scope ,$rootScope, $http, cartService){
		
		$scope.cart = cartService.getCart();

			
		$scope.total = sumaTotal($scope.cart); 

		$scope.clean = function(){
			$scope.cart = cartService.clean(); 	
			$scope.total = 0;  
		}

		
		console.log($scope.cart);
		console.log($scope.total);
		$scope.count= function(){
			return ($scope.cart.length==0);
		}

		function sumaTotal (cesta){
			console.log("sumando...");
			var total=0;
			for(var i=0; i<cesta.length; i++){
				total += cesta[i].price*cesta[i].uds;
			}
			console.log('el total es de '+total); 
			return total; 	
		}

		$scope.buyCart = function(){
			var data = [];

			for (var i=0; i<$scope.cart.length; i++){
				var inc = {
					'id' : $scope.cart[i].id,
					'price' : $scope.cart[i].price,
					'uds' : $scope.cart[i].uds,
				};
				
				data.push(inc);
			}
			console.log(data);
			
			$http.post("app/crud/insert_products.php",data)
				.success(function(response){
					console.log(response);
					})
				.error(function(err){
					console.log(err); 
				});
				
			}
					
	}
	
})();