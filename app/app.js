var apiApp = angular.module('apiApp', ['ngMaterial','ui.router']);

apiApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .state('pokedex', {
            url: '/pokedex',
            templateUrl: 'app/pokedex/pokedex.html',
            controller: 'PokedexCtrl'
        });

    var customPrimary = {
        '50': '#81749d',
        '100': '#746691',
        '200': '#685c82',
        '300': '#5c5173',
        '400': '#504764',
        '500': '#443C55',
        '600': '#383146',
        '700': '#2c2737',
        '800': '#201c28',
        '900': '#fff',
        'A100': '#fff',
        'A200': '#fff',
        'A400': '#fff',
        'A700': '#fff',
        'contrastDefaultColor': 'light'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#3a4c13',
        '100': '#4a6018',
        '200': '#59751d',
        '300': '#698923',
        '400': '#799d28',
        '500': '#88b22d',
        '600': '#a3cf42',
        '700': '#add457',
        '800': '#b7da6b',
        '900': '#c1df7f',
        'A100': '#a3cf42',
        'A200': '#98C632',
        'A400': '#88b22d',
        'A700': '#cbe494'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#f9c478',
        '100': '#f7ba60',
        '200': '#f6af47',
        '300': '#f5a52f',
        '400': '#f49a17',
        '500': '#E68D0B',
        '600': '#ce7e0a',
        '700': '#b56f09',
        '800': '#9d6008',
        '900': '#855106',
        'A100': '#facf90',
        'A200': '#fbd9a9',
        'A400': '#fce4c1',
        'A700': '#6c4205'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#fefefe',
        '400': '#f2f2f2',
        '500': '#e5e5e5',
        '600': '#d8d8d8',
        '700': '#cbcbcb',
        '800': '#bfbfbf',
        '900': '#b2b2b2',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#a5a5a5'
    };
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')

});
