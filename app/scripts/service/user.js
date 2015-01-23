/**
 * Created by yeyou.xj on 2015/1/8.
 */
angular.module('app').factory('UserService', ['$resource', 'MyInterceptor', function($resource, MyInterceptor) {
  return $resource('/user/checkstatus.json', {

  }, {
    checkStatus: {
      method: 'GET',
      interceptor: MyInterceptor
    },
    gotoConsole: {
      method: 'GET',
      interceptor: MyInterceptor,
      url: '/user/goto_console.json'
    }
  });
}]);

angular.module('app').factory('MyInterceptor', ['$location', function($location) {
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
