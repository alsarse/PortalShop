(function(){

	'use strict';

	angular.module('Portalshop.pages.home',['ui.router'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		$stateProvider
			.state("/home", {
				url: '/home',
				templateUrl: 'app/pages/home/home.html',
				
			});
	}
		
})();