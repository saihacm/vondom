'use strict';

// Declare core application module which pulls all the components together
angular.module('angularGruntSeed', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ng-admin'
])
    .controller('mainController', ['$scope',
        function ($scope, gridService) {
        }
    ]);