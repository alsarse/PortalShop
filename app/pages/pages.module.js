(function (){
	'use strict';
	
	angular.module('Portalshop.pages', [
		'ui.router',
		'ui.bootstrap',
		'LocalStorageModule',
		'toaster',
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

	function cartService(localStorageService){
		
		this.key = 'cesta'

		if(localStorageService.get(this.key)){
			this.cart = localStorageService.get(this.key);
		}else{
			this.cart = [];
		}
		

		this.addProducto = function(producto){
			this.cart.push(producto);
			this.updateCart();
		}

		this.updateCart = function(){
			localStorageService.set(this.key, this.cart);
		}

		this.clean = function(){
			this.cart = [];
			this.updateCart();
			return this.getCart();
		}

		this.getCart = function(){
			return this.cart;
		}

		this.removeProducto = function(producto){
			this.cart = this.cart.filter(function(prod){
				return prod !== producto
			});
			this.updateCart();
			return this.getCart; 
		}

		this.total = function(){
			console.log("sumando...");
			var total=0;
			for(var i=0; i<this.cart.length; i++){
				total += this.cart[i].price*this.cart[i].uds
			}
			console.log('el total es de '+total); 
			return total; 	
		}

	}


	function routeConfig($urlRouterProvider){

		$urlRouterProvider.otherwise("/home");
	}

})();