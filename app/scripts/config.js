/**
 * Created by Jim on 2014/12/28.
 */
'use strict';
angular.module('app').config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
  //$routeProvider.when('/brother', {
  //    templateUrl: 'scripts/view/index.html',
  //    controller: 'brotherController'
  //}).otherwise({redirectTo: '/'});
  $stateProvider.state('brother', {
    url: '/brother',
    templateUrl: 'scripts/view/brother/index.html',
    controller: 'brotherController'
  });
  $stateProvider.state('hrg', {
    url: '/hrg',
    templateUrl: 'scripts/view/hrg/index.html',
    controller: 'hrgController'
  });
  $stateProvider.state('campus', {
    url: '/campus',
    templateUrl: 'scripts/view/campus/index.html',
    controller: 'campusController'
  });
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'scripts/view/home.html',
    controller: 'indexController'
  });
}]);
