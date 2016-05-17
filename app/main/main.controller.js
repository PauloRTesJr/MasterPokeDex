'use strict';

angular.module('apiApp')
    .controller('MainCtrl', function ($scope, auth, $location, store) {

    	$scope.auth = auth;


    	$scope.logout = function() {
		  	auth.signout();
		  	store.remove('profile');
		  	store.remove('token');
		  	$location.path('/login');
		}
   
    });