/**
 * Created by Jim on 2015/1/2.
 */
'use strict';
angular.module('app.directive').directive('pager', function () {
  return {
    restrict: 'E',
    replace: true,
    template: [
      '<ul class="pagination">',
      '<li class="{{enableFirst()}}"><a ng-click="switchPage(1)" aria-label="First" href="javascript:;"><span aria-label="true">«</span></a></li>',
      '<li class="{{enablePrevious()}}"><a ng-click="switchPage(current-1)" aria-label="Previous" href="javascript:;"><span aria-label="true">&lt;</span></a></li>',
      '<li class="{{showPreGroup()}}"><a ng-click="switchPage(first - 1)" href="javascript:;">...</a></li>',
      '<li class="{{item === current ? \'active\' : \'\'}}"  ng-repeat="item in items"><a ng-click="switchPage(item)"href="javascript:;">{{item}}</a></li>',
      '<li class="{{showNextGroup()}}"><a ng-click="switchPage(first + maxShowPages)" href="javascript:;">...</a></li>',
      '<li class="{{enableNext()}}"><a ng-click="switchPage(current+1)" aria-label="Next" href="javascript:;"><span aria-label="true">&gt;</span></a></li>',
      '<li class="{{enableLast()}}"><a ng-click="switchPage(total)" aria-label="Last" href="javascript:;"><span aria-label="true">»</span></a></li>',
      '</ul>',
    ].join(''),
    transclude: true,
    scope: {
//      current: '=current',
      total: '=total',
      maxShowPages: '=maxShowPages',
      onPageChanged: '=onPageChanged'
    },
    link: function () {
      console.log('load....');
    },
    controller: function ($scope) {
      $scope.first = 1;
      $scope.current = 0;
      $scope.switchPage = function(page) {
        if (page < 1 || page > $scope.total) {
          return;
        }
        if ($scope.onPageChanged && typeof $scope.onPageChanged === 'function') {
          $scope.onPageChanged.call($scope, page);
        }
        $scope.setPage(page);
      };

      $scope.setPage = function(currentPage) {
        if ($scope.current === currentPage) {
          return;
        }
        $scope.current = currentPage;

        var maxShowPages = $scope.maxShowPages || 5;

        var items = [];
        var pageLimit = Math.min(maxShowPages, $scope.total);
        if (currentPage > $scope.first && currentPage < $scope.first + maxShowPages - 1) {
          return;
        }
        //设置是否到头
        if (currentPage < $scope.first) {
          $scope.first = $scope.first - pageLimit;
          if ($scope.first <= 0 || currentPage <= 1) {
            $scope.first = 1;
          }
        }
        //设置是否到尾
        if (currentPage > $scope.first + pageLimit - 1) {
          $scope.first = $scope.first + pageLimit;
          if ($scope.first + pageLimit - 1 >= $scope.total || currentPage >= $scope.total) {
            $scope.first = $scope.total - pageLimit + 1;
          }
        }

        //设置页面元素
        for (var i = 0; i < pageLimit; i++) {
          items.push($scope.first + i);
        }
        $scope.items = items;
      };

      $scope.enableFirst = function() {
        return $scope.first > 1 ? ' ' : 'disabled';
      };

      $scope.enablePrevious = function() {
        return $scope.current > 1 ? ' ' : 'disabled';
      };

      $scope.enableNext = function() {
        return $scope.current < $scope.total ? ' ' : 'disabled';
      };

      $scope.enableLast = function() {
        return ($scope.first + $scope.maxShowPages - 1 < $scope.total) ? ' ' : 'disabled';
      };

      $scope.showPreGroup = function() {
        return $scope.first > 1 ? ' ' : 'hidden';
      };

      $scope.showNextGroup = function() {
        return ($scope.first + $scope.maxShowPages - 1 < $scope.total) ? ' ' : 'hidden';
      };

      $scope.setPage(1);

    }
  };
});
