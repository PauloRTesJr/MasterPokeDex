'use strict';

angular.module('apiApp')
    .controller('TopBarCtrl', function ($mdSidenav, $mdDialog, $scope) {

        $scope.openSidebar = function(){
            $mdSidenav('left').toggle();
        }

    });
