/**
 * Created by Jim on 2014/12/28.
 */
'use strict';
angular.module('app.brother').controller('brotherController', ['$scope', 'StudentModel', function ($scope, StudentModel) {
  console.log('Hello, brother');
  $scope.col_1 = [];
  $scope.col_2 = [];
  $scope.listCount = 1;
  $scope.addTrackDialog = {
    dateOptions: {
      changeYear: true,
      changeMonth: true,
      yearRange: '1900:-0'
    },
    showDialog: false,
    dropBoxCommType: {
      items: [
        {index: 0, value: '电话'},
        {index: 0, value: 'QQ'},
        {index: 0, value: '邮件'},
        {index: 0, value: '手机'}
      ],
      selectedIndex: 0
    },
    dropBoxStatus: {
      items: [
        {index: 0, value: '需HR跟进'},
        {index: 0, value: '无需HR跟进'}
      ],
      selectedIndex: 0
    },
    dropBoxResult: {
      items: [],
      selectedIndex: 0
    },
    student_id: null,
    communicate_date: null,
    //communicate_type: 0,
    //status: 0,
    //communicate_result: 0,
    communicate_record: ''
  };
  //$scope.studentList = [];
  $scope.init = function () {
    StudentModel.get(function(result) {
      $scope.listCount = result.students.length;
      $scope.col_1 = result.students.slice(0, Math.ceil($scope.listCount / 2.0));
      $scope.col_2 = result.students.slice(Math.ceil($scope.listCount / 2.0));
      console.log(result.students.length);
      console.log($scope.col_1.length);
      console.log($scope.col_2.length);
    });
  };

  $scope.getCol_1Class = function() {
    return $scope.listCount <= 1 ? 'col-fill-block' : '';
  };

  $scope.showCol_2 = function() {
    return $scope.listCount > 1;
  };

  $scope.openAddDialog = function(student_id) {
    $scope.addTrackDialog.showDialog = true;
    $scope.addTrackDialog.student_id = student_id;
  };

  $scope.saveTrack = function() {
    //console.log($scope.addTrackDialog);
    var data = {
      communicate_date: $scope.addTrackDialog.communicate_date,
      communicate_type: $scope.addTrackDialog.dropBoxCommType.selectedIndex,
      status: $scope.addTrackDialog.dropBoxStatus.selectedIndex,
      communicate_result: $scope.addTrackDialog.dropBoxResult.selectedIndex,
      communicate_record: $scope.addTrackDialog.communicate_record
    };
    var obj = new StudentModel(data);
    obj.$track({
      student_id: $scope.addTrackDialog.student_id
    }, function(data) {
      console.log(data);
    });
    console.log(data);
    $scope.init();
    $scope.closeDialog();
  };

  $scope.closeDialog = function() {
    this.addTrackDialog.showDialog = false;
  };

  $scope.showMore = function(student) {
    StudentModel.trackHistory({
      student_id: student.student_id
    }, function(data) {
      student.track_history = data.histories;
      student.hide = true;
      //console.log(data);
    });
  };

  $scope.hideMore = function(student) {
    student.track_history=student.track_history.slice(0, 3);
    student.hide = false;
  }

}]);
