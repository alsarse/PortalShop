(function(){
	'use strict';

	angular.module('Portalshop.pages.cart', ['ui.router'])
		.config(routeConfig);

	
	function routeConfig($stateProvider){
		$stateProvider
			.state("/cesta", {
				url: '/cesta',
				templateUrl: 'app/pages/cart/cesta.html',
				controller: 'cartCtrl'
			})		
	}
})();