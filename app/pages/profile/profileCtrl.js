(function(){
	'use strict';

	angular.module('Portalshop.pages.profile')
		.controller('ProfileCtrl', ProfileCtrl); 

	function ProfileCtrl($scope, $http){

		$scope.getHistorical = function(){
    		$http.get("app/crud/historical_values.php")
    		.success(function(response){
    			console.log(response);
    		}).error(function (err){
    			console.log(err);
    		});
    	} 

	}

})();