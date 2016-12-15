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
		
		.config(routeConfig)
		.service('cartService', cartService);
		



	/*--------
	ngInject 
	----------*/

	function cartService(){
		
		if(!this.cart){
			this.cart = []; 
		}

		this.addProducto = function(producto){
			var newCart =this.cart.push(producto);
			this.updateCart(newCart);
		}

		this.updateCart = function(cart){
			this.cart = cart;
		}

		this.clean = function(){
			var empty = [];
			updateCart(empty);
			return this.getCart();
		}

		this.getCart = function(){
			return this.cart;
		}

		this.removeProducto = function(producto){
			var removed = this.cart.filter(function(prod){
				return prod !== producto
			});
			this.updateCart(removed);

			return this.getCart; 
		}

	}


	function routeConfig($urlRouterProvider){

		$urlRouterProvider.otherwise("/home");
	}

})();