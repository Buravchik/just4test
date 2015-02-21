'use strict';

angular.module('myNewProject', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'mgcrea.ngStrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
