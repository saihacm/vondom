'use strict';

angular.module('angularGruntSeed')

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'HomeController'
            });

        $urlRouterProvider.otherwise('/home');
    });