'use strict';

angular.module('apiApp')
    .controller('FooterCtrl', function ($mdSidenav, $mdDialog, $scope) {

        $scope.openSidebar = function(){
            $mdSidenav('left').toggle();
        }

    });
