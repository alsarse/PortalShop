(function(){

	'use strict';

	angular.module('Portalshop.pages.profile',['ui.router'])
		.config(routeConfig);

	/*---------
	@ngInject
	---------*/

	function routeConfig($stateProvider){
		$stateProvider
			.state("/perfil", {
				url: '/perfil',
				templateUrl: 'app/pages/profile/profile.html',
				controller: 'ProfileCtrl'
			});
	}
		
})();