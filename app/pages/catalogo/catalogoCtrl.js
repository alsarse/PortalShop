(function(){
	'use strict';

	angular.module('Portalshop.pages.catalogo')
		.controller('catalogoCtrl', catalogoCtrl);
		

	function catalogoCtrl($scope, $http, $location, $uibModal) {
				
		var self=this; 

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
    	
    	$scope.msg = "TEST";
    	$scope.data= {};

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

    	$scope.showData = function(){
    		console.log($scope); 
    	}

	}



//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html

})();