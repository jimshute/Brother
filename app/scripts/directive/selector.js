/**
 * Created by yeyou.xj on 2015/1/5.
 */
angular.module('app.directive').directive('selector', ['$timeout', function ($timeout) {
  return {
    restrict: 'E',
    replace: true,
    template: [
      '<div style="position: relative;">',
      '<div ng-click="triggerContent()" ng-blur="hideContent()" class="kuma-select kuma-select-trigger" style="width: 117px;" tabIndex=100>',
      '<a href="javascript:void(0);">',
      '<span>{{items[selectedIndex].value}}</span><i class="kuma-icon kuma-icon-triangle-down"',
      'title="下拉"></i>',
      '</a>',
      '</div>',
      '<div class="kuma-select" style="width: 119px; position: absolute; left: 0; top: 29px; display: block; z-index: 999;">',
      '<ul ng-show="dropDown" class="kuma-select-content">',
      //'<li class="kuma-select-item">--请选择--</li>',
      '<li ng-repeat="item in items" ng-click="setSelected($index)" class="kuma-select-item"><span>{{item.value}}</span></li>',
      '</ul>',
      '</div>',
      '</div>'
    ].join(''),
    scope: {
      items: '=',
      selectedIndex: '='
    },
    controller: function($scope, $element) {
      $scope.dropDown = false;
      //$scope.items.unshift({index: -1, value: '--请选择--'});
      $scope.$watch('items', function(value) {
        if (value.length === 0 || value[0].index !== -1) {
          $scope.items.unshift({index: -1, value: '--请选择--'});
        }
        $scope.selectedIndex = 0;
      });

      $scope.triggerContent = function() {
        $scope.dropDown = !$scope.dropDown;
        $element.find('.kuma-select-trigger').focus();
      };

      $scope.hideContent = function() {
        $timeout(function() {
          $scope.dropDown = false;
        }, 100);
      };

      $scope.setSelected = function(index) {
        console.log('hello111');
        $scope.selectedIndex = index;
      }
    },
    link: function($scope, element, attr) {
      //element.find('.kuma-select-trigger').blur(function() {
      //  //alert('fuck');
      //  $scope.dropDown = false;
      //});
    }

  };
}]);
//angular.module('app.directive').directive('selectBlur', ['$parse', function($parse) {
//  return function(scope, element, attr) {
//    var fn = $parse(attr['selectBlur']);
//    element.bind('blur', function(event) {
//      scope.$apply(function(event) {
//        fn(scope, {$event: event});
//      });
//    });
//  };
//}]);
