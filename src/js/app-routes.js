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
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'components/categories/categories.html',
                controller: 'CategoriesController'
            })
            .state('subcategories', {
                url: '/subcategories/{id}',
                templateUrl: 'components/subcategories/subcategories.html',
                controller: 'SubCategoriesController'
            })
            .state('product', {
                url: '/product/{id}',
                templateUrl: 'components/product/product.html',
                controller: 'ProductController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'components/about/about.html',
                controller: 'AboutController'
            })
            .state('collections', {
                url: '/collections',
                templateUrl: 'components/collections/collections.html',
                controller: 'CollectionController'
            })
            .state('collectionsdetail', {
                url: '/collections/{id}',
                templateUrl: 'components/detail/detail-collection.html',
                controller: 'DetailCollectionController'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'components/news/news.html',
                controller: 'NewsController'
            })
            .state('atmosphe', {
                url: '/atmosphe',
                templateUrl: 'components/atmosphe/atmosphe.html',
                controller: 'AtmospheController'
            });
    

        $urlRouterProvider.otherwise('/home');
    });