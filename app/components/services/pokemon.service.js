'use strict';

angular.module('apiApp')
    .factory('Pokemons', function($resource) {
        return $resource('http://pokeapi.co/api/v2/pokemon/:id',{id: '@id'}, {
            query: {method: 'get', isArray: false},
            refresh: {method: 'get', params:{offset:true}, isArray: false}
        });
    });
