/**
 * Created by Jim on 2015/1/3.
 */
'use strict';
angular.module('app.campus').factory('BUModel', ['$resource', 'MyInterceptor', function($resource, MyInterceptor) {
  return $resource('/campus/bu.json', {}, {
    'get': {
      method: 'GET',
      interceptor: MyInterceptor
    }
  });
}]);

angular.module('app.campus').factory('BUList', ['$resource', 'MyInterceptor', function($resource, MyInterceptor) {
  return $resource('/campus/bu_list.json', {}, {
    'get': {
      method: 'GET',
      interceptor: MyInterceptor
    }
  });
}]);

angular.module('app.campus').factory('MyInterceptor', ['$location', function($location) {
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
