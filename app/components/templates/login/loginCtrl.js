(function(){
	'use strict';

	angular.module('Portalshop.components.login')
		.controller('loginCtrl', loginCtrl);

	function loginCtrl($scope, $rootScope, $http, $location){
		

		$scope.username="";
		$scope.password="";

		$scope.error="";
	
		$scope.loginUser=function(){
			var data={
				username: $scope.username,
				password: $scope.password
			};
			console.log(data); 
			$http.post("app/crud/valid_user.php", data)
				.success(function(response){
					console.log(response)
					if(response.login){	
						location.reload();
					}else{
						$scope.error="Login Incorrecto. Introduzca un usuario y contraseña válidos"; 
					}
				});
		}

	}

})();