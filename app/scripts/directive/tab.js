/**
 * Created by Jim on 2015/1/2.
 */
'use strict';
angular.module('app.directive').directive('tab', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<ul><li ng-repeat="item in items" class="{{initActive($index)}}"><a href="#/hrg" ng-click="selectItem($index)">{{item.itemText}}（{{item.count}}）</a></li></ul>',
    transclude: true,
    scope: {
      items: '=tabitems',
      selectedItemChanged: '=selectedItemChanged',
      selectedIndex: '=selectedIndex',
    },
    link: function(scope, element, attrs) {
      console.log(scope.selectedIndexChanged);
//      $('#top-tab a').click(function() {
//        $('#top-tab .active').removeClass('active');
//        $(this).parent('li').addClass('active');
//      });
//      $scope.loadList();
    },
    controller: function($scope) {
//      $scope.selectItem = function($index) {
//        $scope.tabItems[$scope.selectedIndex].removeClass('active');
//        $scope.selectedIndex = $index;
//        $scope.tabItems[$scope.selectedIndex].addClass('active');
//        console.log($index);
//      };
      $scope.initActive = function($index) {
        if (!$scope.selectedIndex || $scope.selectedIndex < 0) {
          $scope.tabItems = $('#top-tab li');
          if ($index === 0) {
            $scope.selectedIndex = 0;
            return 'active';
          } else {
            return '';
          }
        }
      };
      $scope.selectItem = function($index) {
        var lastselectedIndex = $scope.selectedIndex;
        if (!$scope.selectedItemChanged) {
          console.log('not setted');
          return;
        }
        if (typeof $scope.selectedItemChanged === 'function') {
          $scope.selectedItemChanged.call($scope, $index, $scope.selectedIndex, $scope.tabItems);
        } else {
          console.log('not a function');
        }
        if (lastselectedIndex === $scope.selectedIndex) {
          $($scope.tabItems[lastselectedIndex]).removeClass('active');
          $($scope.tabItems[$index]).addClass('active');
          $scope.selectedIndex = $index;
        }
      };
    }
  };
});

angular.module('app.directive').directive('tabitem', function() {
  return {};
});
