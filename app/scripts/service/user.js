/**
 * Created by yeyou.xj on 2015/1/8.
 */
angular.module('app').factory('UserService', ['$resource', function($resource) {
  return $resource('/user/checkstatus.json', {

  }, {
    checkStatus: {
      method: 'GET'
    }
  });
}]);
