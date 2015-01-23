/**
 * Created by yeyou.xj on 2015/1/8.
 */
angular.module('app').controller('indexController', ['$scope', 'UserService', '$location', function($scope, UserService, $location) {
  $scope.loginStatus = false; //登录状态

  $scope.username = null;

  $scope.avatar = '';

  $scope.init = function() {
    UserService.get(function(data) {
      if (!data.error) {
        $scope.loginStatus = data.status;
        $scope.avatar = data.data.avatar;
        $scope.username = data.username;
        $scope.loginStatus = true;
      }
    });
  };

  $scope.gotoConsole = function() {
    UserService.gotoConsole(function(data) {
      $location.path('/' + data.page);
    }, function() {

    });
  };

  $scope.loadIntroduction = function() {}
}]);
