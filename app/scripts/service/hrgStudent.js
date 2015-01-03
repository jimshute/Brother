/**
 * Created by Jim on 2015/1/2.
 */
'use strict';
angular.module('app.hrg').factory('HrgStudentModel', ['$resource', function($resource) {
  return $resource('/hrg/younger.json', {}, {
    'get': {
      method: 'GET'
    }
  });
}]);

angular.module('app.hrg').factory('HrgStudentList', ['$resource', function($resource) {
  return $resource('/hrg/youngers.json', {}, {
    'get': {
      method: 'GET'
    }
  });
}]);