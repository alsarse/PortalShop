(function(){
	'use strict';

	angular.module('Portalshop.components', [
		'Portalshop.components.login'
	])
	.directive('baSidebar', baSidebar)
	.directive('psNavbar', psNavbar)
	.directive('loginView', loginView);
	

	function baSidebar(){
		return {
			restrict: 'E',
			templateUrl: "app/components/templates/baSidebar.html",
		}
	}

	function psNavbar(){
		return{
			restrict: 'E',
			templateUrl: "app/components/templates/psNavbar.html",
			controller: 'loginCtrl'
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