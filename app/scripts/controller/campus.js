/**
 * Created by yeyou.xj on 2014/12/29.
 */
'use strict';
angular.module('app.campus').controller('campusController', ['$scope', 'BUList', function($scope, BUList) {
  console.log('Hello, Campus');
  $scope.keywords = '';
  $scope.buList = [];
  $scope.pager = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    maxShowPages: 5
  };
  $scope.init = function() {
    $scope.loadList(function(data) {
      $scope.buList = data.bu_list;
    });
  };

  /*
   * 加载列表
   * options: 选项
   *   keywords: 关键字
   *   start: 起始位置，默认从1开始
   *   limit: 条数，默认为$scope.pager.pageSize
   *   sort: 排序列，默认为不排序
   *   asc: 排序方式，默认为asc
   *   status: 学生状态，默认为全部
   * callback: 请求响应后的回调
   * */
  $scope.loadList = function (options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    options = options || {};
    if (!options.keywords || options.keywords === '') {
      options.keywords = undefined;
    }
    BUList.get({
      keywords: options.keywords,
      start: options.start || 1,
      limit: options.limit || $scope.pager.pageSize,
      sort: options.sort,
      asc: options.asc || 'asc'
    }, function (data) {
      callback(data);
    }, function (data) {
      callback(data);
    });
  };

  $scope.onPageChanged = function(page) {
    var options = {
      start: (page - 1) * $scope.pager.pageSize, //start 从0开始
      limit: $scope.pager.pageSize,
      keywords: $scope.keywords
    };
    $scope.loadList(options, function (data) {
      console.log(data);
      $scope.buList = data.bu_list;
    });
  };

  $scope.search = function() {
    var options = {
      keywords: $scope.keywords,
    };
    $scope.loadList(options, function(data) {
      $scope.buList = data.bu_list;
    });
  };
}]);
