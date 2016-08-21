'use strict';

angular.module('apiApp')
    .controller('PokedexCtrl', function ($scope, Pokemons) {
    	var pokemons = Pokemons.query();
    	console.log(pokemons);
    });
