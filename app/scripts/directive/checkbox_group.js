/**
 * Created by yeyou.xj on 2015/1/6.
 */
angular.module('app.directive').directive('checkboxGroup', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    template: [
      '<div>',
      '<span style="color: #999;">{{title}}</span>',
      '<label ng-show="{{hasDefault}}" style="display: inline-block; width: 120px;">',
      '<input type="checkbox" ng-model="defaultItem.checked" ng-change="allChanged()" /><s></s>',
      '{{defaultItem.text}}',
      '</label>',
      '<lable style="display: inline-block; width: 120px;" ng-repeat="item in items">',
      '<input type="checkbox" ng-model="item.checked" ng-change="itemChanged($index)"/><s></s>',
      '{{item.text}}',
      '</label>',
      '</div>'
    ].join(''),
    scope: {
      title: '@',
      items: '=', //{checked, value, text}
      hasDefault: '@',
      defaultItem: '=',
      checkResult: '=',
      checkChanged: '='
    },
    controller: function($scope) {
      //$scope.checkResult = [];
      $scope.generateResult = function() {
        var result = [];
        $scope.items.forEach(function(v, i) {
          if (v.checked) result.push(v.value);
        });
        $scope.checkResult = result;
      };
      //$scope.$watch('items', function(value, from) {
      //  var result = [];
      //  value.forEach(function(v, i) {
      //    if (v.checked) result.push(v.value);
      //  });
      //  $scope.checkResult = result;
      //});

      $scope.allChanged = function() {
        if ($scope.defaultItem.checked) {
          $scope.items.forEach(function(v, i) {
            v.checked = true;
          });
        } else {

        }
        $scope.generateResult();
        $scope.checkChanged.call($scope, $scope.checkResult);
      };

      $scope.itemChanged = function($index) {
        if (!$scope.items[$index].checked && $scope.defaultItem.checked) {
          $scope.defaultItem.checked = false;
        }
        $scope.generateResult();
        if ($scope.checkResult.length === 0) {
          $scope.items[$index].checked = true;
          return $scope.generateResult();
        }
        $scope.checkChanged.call($scope, $scope.checkResult);
      }
    }
  }
});
