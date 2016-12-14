(function(){
	'use strict';

	angular.module('Portalshop.components', [
		'Portalshop.components.login'
	])
	.directive('psNavbar', psNavbar)
	.directive('loginView', loginView);
	
	
	function psNavbar(){
		return{
			restrict: 'E',
			templateUrl: "app/components/templates/psNavbar.html",
			controller: 'catalogoCtrl'
		}
	}
	
	function loginView(){
		return{
			restric: 'E',
			templateUrl: 'app/components/templates/login/loginView.html',
			controller: 'loginCtrl'
		}
	}		
})();