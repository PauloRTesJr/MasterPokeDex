'use strict';

angular.module('apiApp')
    .controller('PokedexCtrl', function ($scope, Pokemons) {
    	$scope.pokemons = [];
    	$scope.next = '';

    	$scope.query = Pokemons.query(function(data) {
		     $scope.pokemons = data.results;
		     $scope.next = data.next;
		});
    	console.log($scope.pokemons);
    });
