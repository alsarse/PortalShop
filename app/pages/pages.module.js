(function (){
	'use strict';
	
	angular.module('Portalshop.pages', [
		'ui.router',
		'ui.bootstrap',
		'Portalshop.pages.home',
		'Portalshop.pages.catalogo',
		'Portalshop.pages.profile',	
		'Portalshop.pages.cart',
		
	])
		
		.config(routeConfig);


	/*--------
	ngInject 
	----------*/

	function routeConfig($urlRouterProvider){

		$urlRouterProvider.otherwise("/home");
	}

})();