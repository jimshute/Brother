/**
 * Created by yeyou.xj on 2015/1/22.
 */
angular.module('app.directive').directive('checkboxSelector', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: [
      '<div class="checkbox-selector" ng-click="toggleDrop()" ng-blur="hideDrop()" tabindex="3">',
      '<div>{{content}}</div>',
      '<div ng-show="dropDown" class="kuma-select">',
      '<ul class="kuma-select-content">',
      '<li class="kuma-select-item inner-title">{{content}}</li>',
      '</ul>',
      '</div>'
    ].join(''),
    scope: {
      content: '@'
    },
    controller: function($scope, $element, $attrs, $transclude) {
      $scope.dropDown = false;
      $transclude(function(clone, scope) {
        var ul = $element.find('ul');
        var lis = clone.filter('li');
        ul.append(lis);
      });
      $scope.toggleDrop = function() {
        $scope.dropDown = !$scope.dropDown;
      };
      $scope.hideDrop = function() {
        //$scope.dropDown = false;
      }
    }
  }
});
