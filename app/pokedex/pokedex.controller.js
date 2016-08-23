'use strict';

angular.module('apiApp')
    .controller('PokedexCtrl', function ($scope, Pokemons) {
    	var pokemons;
    	Pokemons.query(function(data){
    		pokemons = data;
    	});
    	console.log(pokemons);
    });
