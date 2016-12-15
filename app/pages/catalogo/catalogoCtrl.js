(function(){
	'use strict';

	angular.module('Portalshop.pages.catalogo')
		.controller('catalogoCtrl', catalogoCtrl);
		

	function catalogoCtrl($scope, $http, $location, $uibModal, cartService) {
				
		//Obtener todos los productos de la DB.
		$scope.getAll = function(){
    		$http.get("app/crud/read_productos.php")
    		.success(function(response){
    			$scope.productos = response.records; 
    			console.log($scope.productos);
    		});
    	}

        //Cambiar la vista a /catalogo cuando realizas una busqueda
    	$scope.searchingMode = function($event){
    		if($event.keyCode==13){
    			$location.path('/catalogo');
    		}
    	}
    	
        $scope.data= {};

        //Abrir una ventana modal con información del producto al pinchar sobre cualquier producto
    	$scope.displayModal = function (producto) {
		  $scope.data = producto; 

      	  $uibModal.open({
        	animation: true,
            controller: 'catalogoCtrl',
        	templateUrl: "app/pages/catalogo/catalogoModalView.html",
        	size: "lg",        	
    	 	resolve: {
          		data: function () {
            		return producto;
          		}
  			}
		  }).rendered.then( function(){
		  		$location.path("/catalogo");	
		  });
    	}
        

        //PROCESO DE COMPRA: Incluir en cartCtrl ? 

        $scope.cart = cartService.getCart();


        $scope.newCartItem = {};         

        $scope.add= function(producto,ud){
            this.$dismiss();
            $scope.newCartItem = producto; 
            $scope.newCartItem.uds = ud; 
            
            cartService.addProducto($scope.newCartItem);
            $scope.newCartItem= {}; 
            
            console.log($scope.cart);
        }

        $scope.remove = function(producto){
            $scope.cart = cartService.removeProducto(producto); 
        }

    	$scope.showData = function(){
    		console.log($scope.cart); 
    	}
     
	}

})();