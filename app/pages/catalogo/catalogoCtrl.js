(function(){
	'use strict';

	angular.module('Portalshop.pages.catalogo')
		.controller('catalogoCtrl', catalogoCtrl);
		

	function catalogoCtrl($scope, $http, $location, $uibModal) {
				

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
    	
 		
       	$scope.displayModal = function(producto){
       		
			$uibModal.open({
		      animation: true,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      bindToController: true,
		      controller: 'catalogoCtrl',
		      templateUrl: 'app/pages/catalogo/catalogoModalView.html',
		      size: 'lg',
	    	}).rendered.then(function(){	    		
    			$location.path('/catalogo');
    			
    		});

    	}
	}

//https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html

})();