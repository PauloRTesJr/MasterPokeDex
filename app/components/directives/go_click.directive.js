'use strict';

angular.module('apiApp')
    .directive('goClick', function($location, $state) {
        return function(scope, element, attrs) {
            var path;

            attrs.$observe('goClick', function(val) {
                path = val;
            });

            element.bind('click', function() {
            	console.log('entrei aqui');
                scope.$apply(function() {
                    $state.go(path);
                });
            });
        };
    });
