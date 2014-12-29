/**
 * Created by Jim on 2014/12/28.
 */
angular.module('app').config(['$routeProvider, $stateProvider', function($routeProvider, $stateProvider) {
//    $routeProvider.when('/brother', {
//        templateUrl: 'scripts/view/brother.html',
//        controller: 'brotherController'
//    }).otherwise({redirectTo: '/'});
    $stateProvider.state('/brother', {});
}]);