/**
 * Created by Jim on 2015/1/2.
 */
'use strict';
angular.module('app.hrg').factory('HrgStudentModel', ['$resource', 'MyInterceptor', function($resource, MyInterceptor) {
  return $resource('/hrg/younger.json?student_id=:student_id', {
    student_id: '@student_id'
  }, {
    'get': {
      method: 'GET',
      interceptor: MyInterceptor
    },
    'track': {
      method: 'POST',
      url: '/hrg/track_result.json?student_id=:student_id',
      interceptor: MyInterceptor
    },
    'urge': {
      method: 'POST',
      url: '/hrg/urge.json',
      interceptor: MyInterceptor
    }
  });
}]);

angular.module('app.hrg').factory('HrgStudentList',['$resource', 'MyInterceptor', function($resource, MyInterceptor) {
  return $resource('/hrg/youngers.json', {}, {
    'get': {
      method: 'GET',
      interceptor: MyInterceptor
    }
  });
}]);

angular.module('app.hrg').factory('MyInterceptor', ['$location', function($location) {
  return {
    response: function(config) {
      if (config.data.error && config.data.errno == '1001') {
        console.log('session time out');
        $location.path('/');
      } else {
        console.log('success!');
        return config.data;
      }
    },
    responseError: function(config) {
      console.log('error');
      config.data.students = [];
      return config.data;
    }
  };
}]);
