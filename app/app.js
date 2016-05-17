var apiApp = angular.module('apiApp', ['ngMaterial','ui.router', 'auth0', 'angular-storage', 'angular-jwt', 'ngRoute']);

apiApp.config(function($stateProvider, $urlRouterProvider,authProvider, $httpProvider, $locationProvider,jwtInterceptorProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        });

    authProvider.init({
    	domain: 'paulortesjr.auth0.com',
    	clientID: 'vQWkCQ3nNKNXnFGiSxNDIf8T8WAsbila',
    	loginUrl: '/login'
	});

	authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
  		console.log("Login Success");
  		profilePromise.then(function(profile) {
    		store.set('profile', profile);
    		store.set('token', idToken);
  		});
  		$location.path('/');
	});

	//Called when login fails
	authProvider.on('loginFailure', function() {
  		console.log("Error logging in");
  		$location.path('/login');
	});
});
