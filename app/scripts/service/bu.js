/**
 * Created by Jim on 2015/1/3.
 */
'use strict';
angular.module('app.campus').factory('BUModel', ['$resource', function($resource) {
  return $resource('/campus/bu.json', {}, {
    'get': {
      method: 'GET'
    }
  });
}]);

angular.module('app.campus').factory('BUList', ['$resource', function($resource) {
  return $resource('/campus/bu_list.json', {}, {
    'get': {
      method: 'GET'
    }
  });
}]);