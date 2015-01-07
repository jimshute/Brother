/**
 * Created by yeyou.xj on 2014/12/31.
 */
'use strict';
angular.module('app.brother').factory('StudentModel', ['$resource', function($resource) {
  return $resource('/brother/younger.json', {
    student_id: '@student_id'
  }, {
    'get': {
      method: 'GET'
    },
    'trackHistory': {
      method: 'GET',
      url: '/brother/youngers/track_history.json'
    },
    'track': {
      method: 'POST',
      url: '/brother/track.json?student_id=:student_id'
    }
  });
}]);
