/**
 * Created by yeyou.xj on 2014/12/29.
 */
'use strict';
angular.module('app.hrg').controller('hrgController', ['$scope', 'HrgStudentList', 'HrgStudentModel', 'StudentStatus', 'HrgCommunicateResult', 'HrgTrackBrotherStatus', 'BrotherTrackStatus', 'HrgTrackStatus', 'Cause', function ($scope, HrgStudentList, HrgStudentModel, StudentStatus, HrgCommunicateResult, HrgTrackBrotherStatus, BrotherTrackStatus, HrgTrackStatus, Cause) {
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

  // Constants
  $scope.studentStatus = StudentStatus;
  $scope.hrgCommunicateResult = HrgCommunicateResult;
  $scope.hrgTrackBrotherStatus = HrgTrackBrotherStatus;
  $scope.hrgTrackStatus = HrgTrackStatus;
  $scope.brotherTrackStatus = BrotherTrackStatus;
  $scope.cause = Cause;

  //$scope.tabitems = [
  //  {
  //    itemText: '全部',
  //    count: '444'
  //  },
  //  {
  //    itemText: '从未跟进',
  //    count: '444'
  //  },
  //  {
  //    itemText: '1周未跟进',
  //    count: '444'
  //  },
  //  {
  //    itemText: '正常跟进',
  //    count: '444'
  //  }
  //];

  $scope.statusItems = [
    {checked: true, value: 0, text: HrgCommunicateResult['0']},
    {checked: true, value: 1, text: HrgCommunicateResult['1']},
    {checked: true, value: 2, text: HrgCommunicateResult['2']}
  ];

  $scope.allStatus = {checked: true, value: 0, text: '全部'};

  $scope.trackFilter = [0, 1, 2];

  $scope.trackItems = [
    {checked: true, value: 0, text: BrotherTrackStatus['0']},
    {checked: true, value: 1, text: BrotherTrackStatus['1']},
    {checked: true, value: 2, text: BrotherTrackStatus['2']}
  ];

  $scope.allTrack = {checked: true, value: 0, text: '全部'};

  $scope.trackMentorFilter = [0, 1, 2];

  $scope.init = function () {
    $scope.loadList(function (data) {
      $scope.studentList = data.youngers;
    });
  };

  $scope.allChecked = false;

  $scope.addTrackDialog = {
    showDialog: false,
    result: 0,
    studentId: null,
    dropBoxType: {
      selectedIndex: 0,
      items: [{
        index: 0,
        value: '户口'
      }, {
        index: 1,
        value: '考研'
      }, {
        index: 2,
        value: '新Offer'
      }]
    },
    communicateRecord: ''
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
    if (!options.trackFilter && options.trackFilter !== '') {
      options.trackFilter = $scope.trackFilter.join('_') || undefined;
    } else if (options.trackFilter === '') {
      options.trackFilter = undefined;
    }
    if (!options.trackMentorFilter && options.trackMentorFilter !== '') {
      options.trackMentorFilter = $scope.trackMentorFilter.join('_') || undefined;
    } else if (options.trackMentorFilter === '') {
      options.trackMentorFilter = undefined;
    }
    HrgStudentList.get({
      keywords: options.keywords,
      start: options.start || 1,
      limit: options.limit || $scope.pager.pageSize,
      sort: options.sort,
      asc: options.asc || 'asc',
      track_filter: options.trackFilter,
      track_mentor_filter: options.trackMentorFilter,
      status: options.status
    }, function (data) {
      $scope.allChecked = false;
      data.youngers.forEach(function (v, i) {
        v.checked = false;
        v.collapsed = true;
      });
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

  $scope.toggleCollapse = function(index) {
    $scope.studentList[index].collapsed = !$scope.studentList[index].collapsed;
  };

  $scope.toggleAll = function() {
    $scope.studentList.forEach(function(v, i) {
      v.checked = $scope.allChecked;
    });
  };

  $scope.collapseAll = function(operation) {
    $scope.studentList.forEach(function(v, i) {
      v.collapsed = operation;
    });
  };

  $scope.checkItem = function($event) {
    $event.stopPropagation();
  };

  $scope.urgeMany = function() {
    var obj = {orders: []};
    $scope.studentList.forEach(function(v, i) {
      if (v.checked) {
        obj.orders.push({
          student_id: v.student_id,
          mentor_id: v.mentor_id
        });
      }
    });
    var model = new HrgStudentModel(obj);
    model.$urge(obj, function(data) {
      if (!data.error) {
        $scope.loadList(function(data) {
          $scope.studentList = data.youngers;
        });
      }
    });
  };

  $scope.trackStudent = function(student_id, $event) {
    $scope.addTrackDialog.showDialog = true;
    $scope.addTrackDialog.studentId = student_id;
    $event.stopPropagation();
  };

  $scope.urge = function(studentId, mentorId, $event) {
    var obj = {orders: [{
      student_id: studentId,
      mentor_id: mentorId
    }]};
    $event.stopPropagation();
    var model = new HrgStudentModel(obj);
    model.$urge(obj, function(data) {
      if (!data.error) {
        $scope.loadList(function(data) {
          $scope.studentList = data.youngers;
        });
      }
    });
  };

  $scope.trackFilterChanged = function(selectResult) {
    var options = {
      keywords: $scope.keywords
    };
    if (this.title === '同学跟进结果：') {
      options.trackFilter = selectResult.join('_');
    } else {
      options.trackMentorFilter = selectResult.join('_');
    }
    $scope.loadList(options, function(data) {
      $scope.studentList = data.youngers;
    });
    //this.statusFilter
  };

  $scope.closeDialog = function() {
    $scope.addTrackDialog.showDialog = false;
  };

  $scope.addTrack = function() {
    var obj = {
      student_id: $scope.addTrackDialog.studentId,
      communicate_result: parseInt($scope.addTrackDialog.result),
      communicate_record: $scope.addTrackDialog.communicateRecord,
      cause: $scope.addTrackDialog.dropBoxType.items[$scope.addTrackDialog.dropBoxType.selectedIndex].index
    };
    console.log(obj);
    var model = new HrgStudentModel(obj);
    model.$track(function(data) {
      $scope.closeDialog();
    });
  }
}]);
