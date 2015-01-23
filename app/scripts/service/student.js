/**
 * Created by yeyou.xj on 2014/12/31.
 */
'use strict';
angular.module('app.brother').factory('StudentModel', ['$resource', 'MyInterceptor', function($resource, MyInterceptor) {
  return $resource('/brother/younger.json', {
    student_id: '@student_id',
  }, {
    'get': {
      method: 'GET',
      interceptor: MyInterceptor
    },
    'trackHistory': {
      method: 'GET',
      url: '/brother/youngers/track_history.json',
      interceptor: MyInterceptor
    },
    'track': {
      method: 'POST',
      url: '/brother/track.json?student_id=:student_id',
      interceptor: MyInterceptor
    }
  });
}]);

angular.module('app.brother').factory('MyInterceptor', ['$location', function($location) {
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
