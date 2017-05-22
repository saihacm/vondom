'use strict';

angular.module('angularGruntSeed')

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'HomeController'
            })
            .state('catalog', {
                url: '/catalogs',
                templateUrl: 'components/catalog/catalog.html',
                controller: 'CatalogController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'components/contact/contact.html',
                controller: 'ContactController'
            });

        $urlRouterProvider.otherwise('/home');
    });