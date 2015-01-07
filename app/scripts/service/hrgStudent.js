/**
 * Created by Jim on 2015/1/2.
 */
'use strict';
angular.module('app.hrg').factory('HrgStudentModel', ['$resource', function($resource) {
  return $resource('/hrg/younger.json?student_id=:student_id', {
    student_id: '@student_id'
  }, {
    'get': {
      method: 'GET'
    },
    'track': {
      method: 'POST',
      url: '/hrg/track_result.json?student_id=:student_id'
    },
    'urge': {
      method: 'POST',
      url: '/hrg/urge.json'
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
