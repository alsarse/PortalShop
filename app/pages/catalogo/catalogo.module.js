(function(){

	'use strict';

	angular.module('Portalshop.pages.catalogo',['ui.router', 'ui.bootstrap','LocalStorageModule','toaster'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		$stateProvider
			.state("/catalogo", {
				url: '/catalogo',
				templateUrl: 'app/pages/catalogo/catalogo.html',
				controller: 'catalogoCtrl'
			})
			
	}
		
})();