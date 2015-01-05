/**
 * Created by yeyou.xj on 2014/12/29.
 */
'use strict';
angular.module('app.hrg').controller('hrgController', ['$scope', 'HrgStudentList', 'HrgStudentModel', function ($scope, HrgStudentList, HrgStudentModel) {
  console.log('Hello, Hrg');
  $scope.selectedIndex = 0;
  $scope.keywords = '';
  $scope.studentList = [];
  $scope.pager = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    maxShowPages: 5
  };
  $scope.tabitems = [
    {
      itemText: '全部',
      count: '444'
    },
    {
      itemText: '从未跟进',
      count: '444'
    },
    {
      itemText: '1周未跟进',
      count: '444'
    },
    {
      itemText: '正常跟进',
      count: '444'
    }
  ];

  $scope.init = function () {
    $scope.loadList(function (data) {
      $scope.studentList = data.youngers;
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
    HrgStudentList.get({
      keywords: options.keywords,
      start: options.start || 1,
      limit: options.limit || $scope.pager.pageSize,
      sort: options.sort,
      asc: options.asc || 'asc',
      status: options.status
    }, function (data) {
      callback(data);
    }, function (data) {
      callback(data);
    });
  };

  /* tab页面切换时触发
   * index: 选中的tab页的索引，从0开始
   * lastItem: 上一次选中的tab索引
   * items: 所以有tab
   * */
  $scope.selectedItemChanged = function (index, lastIndex, items) {
    var options = {
      status: index || undefined,
      keywords: $scope.keywords
    };
    $scope.loadList(options, function(data) {
      $scope.studentList = data.youngers;
    });
  };

  /*
  * 关键字搜索
  * */
  $scope.search = function () {
    var options = {
      keywords: $scope.keywords,
      status: $scope.status
    };
    $scope.loadList(options, function(data) {
      $scope.studentList = data.youngers;
    });
  };

  /*
  * 翻页时触发
  * page：翻到的页面，从1开始
  * */
  $scope.onPageChanged = function (page) {
    var options = {
      start: (page - 1) * $scope.pager.pageSize, //start 从0开始
      limit: $scope.pager.pageSize,
      status: $scope.selectedIndex || undefined,
      keywords: $scope.keywords
    };
    $scope.loadList(options, function (data) {
      console.log(data);
      $scope.studentList = data.youngers;
    });

  };

  $scope.export = function() {
    //$scope.templateUrl = '/scripts/view/brother/add_track.html';
    //$scope.templateString = 'Clicked!';
  }

}]);
