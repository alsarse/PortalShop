(function(){
	'use strict';

	angular.module('Portalshop.components', [
		'Portalshop.components.login',
		'Portalshop.components.navbar',
	])
	.directive('psNavbar', psNavbar)
	.directive('loginView', loginView);
	
	
	function psNavbar(){
		return{
			restrict: 'E',
			templateUrl: "app/components/templates/navbar/psNavbar.html",
			controller: 'navbarCtrl'
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