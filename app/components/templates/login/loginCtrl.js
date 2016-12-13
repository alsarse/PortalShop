(function(){
	'use strict';

	angular.module('Portalshop.components.login')
		.controller('loginCtrl', loginCtrl);

	function loginCtrl($scope, $rootScope, $http, $location){
		$rootScope.currentUser = "";

		$scope.username="";
		$scope.password="";

		$scope.error="";
	
		$scope.loginUser=function(){
			var data={
				username: $scope.username,
				password: $scope.password
			};
				
			$http.post("app/crud/valid_user.php", data)
				.success(function(response){
					console.log(response)
					if(response.login){
						$rootScope.currentUser = response.username;
						location.reload();
					}else{
						$scope.error="Login Incorrecto. Introduzca un usuario y contraseña válidos"; 
					}
				});
		}

		$scope.logout= function(){
			$http.get("app/crud/logout.php")
				.success(function(response){
					location.reload();
				});
		}

	}

})();