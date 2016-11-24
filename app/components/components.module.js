(function(){
	'use strict';

	angular.module('Portalshop.components', [])
	.directive('baSidebar', baSidebar)
	.directive('psNavbar', psNavbar)
	

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
		}
	}
		
		
})();