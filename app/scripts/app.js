/**
 * Created by Jim on 2014/12/28.
 */
'use strict';
angular.module('app', [
  'ngRoute',
  'ui.router',
  //'ui.bootstrap',
  'ui.date',
  'ngResource',
  'app.brother',
  'app.hrg',
  'app.campus',
  'app.directive'
]);
angular.module('app.brother', ['app.constants']);
angular.module('app.hrg', ['app.constants']);
angular.module('app.campus', ['app.constants']);
angular.module('app.directive', ['app.constants']);
angular.module('app.constants', []);
