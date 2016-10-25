'use strict';

angular.module('apiApp')
    .controller('PokedexCtrl', function($scope, Pokemons, $mdDialog, $http) {
        $scope.pokemons = [];
        $scope.offset = 0;

        $scope.query = Pokemons.query(function(data) {
            $scope.pokemons = data.results;
            $scope.next = data.next;
            $scope.previous = data.previous;
        });
        console.log($scope.pokemons);

        ///////////////////////////////
        //DETAIL EACH POKEMON MODAL
        ///////////////////////////////
        $scope.showPokemon = function(ev, pokemon) {
            $scope.querying = true;
            $scope.loading_types = true;
            $mdDialog.show({
                contentElement: '#myStaticDialog',
                targetEvent: ev,
                clickOutsideToClose: true
            });
            console.log(pokemon);
            $http({
                method: 'GET',
                url: pokemon.url
            }).then(function successCallback(response) {
                $scope.pokemon = response.data;
                ///////////////////////////////
                //GET TYPES INFO
                ///////////////////////////////
                angular.forEach($scope.pokemon.types, function(value, key) {
                    $http({
                        method: 'GET',
                        url: value.type.url
                    }).then(function successCallback(response) {
                        value.infos = response.data;
                        $scope.loading_types = false;
                    });
                });
                ///////////////////////////////
                //GET SPECIES INFO
                ///////////////////////////////
                $http({
                    method: 'GET',
                    url: $scope.pokemon.species.url
                }).then(function successCallback(response) {
                    $scope.pokemon.details = response.data;
                    $scope.loading_details = false;
                });
                $scope.loading_details = true;
                $scope.querying = false;
            }, function errorCallback(response) {
                alert('Falha ao carregar o conteúdo!');
            });

        };

        $scope.refreshPokemon = function(direction) {
            if (direction == 'next') {
                $scope.offset += 20;
            }
            if (direction == 'previous') {
                $scope.offset -= 20;
            }
            $scope.pokemons = [];
            $scope.next = '';
            $scope.previous = '';
            $scope.query = Pokemons.refresh({ offset: $scope.offset }, function(data) {
                $scope.pokemons = data.results;
                $scope.next = data.next;
                $scope.previous = data.previous;
            });
        }

        $scope.hoverIn = function() {
            this.hoverEdit = true;
        };

        $scope.hoverOut = function() {
            this.hoverEdit = false;
        };

    });
