(function(){
	'use strict';

	angular.module('Portalshop.components.login',['ui.router'])
		.config(routeConfig);

	function routeConfig($stateProvider){

		$stateProvider
			.state('/login', {
				url: "/login",
				templateUrl: "",
				controller: "loginCtrl"
			});
	}; 

})();