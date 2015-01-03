/**
 * Created by yeyou.xj on 2014/12/31.
 */
'use strict';
angular.module('app.brother').factory('StudentModel', ['$resource', function($resource) {
  return $resource('/brother/younger.json', {}, {
    'get': {
      method: 'GET'
    }
  });
}]);
