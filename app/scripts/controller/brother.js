/**
 * Created by Jim on 2014/12/28.
 */
angular.module('app.brother').controller('brotherController', ['$scope', 'StudentModel', function ($scope, StudentModel) {
  console.log('Hello, brother');
  $scope.col_1 = [];
  $scope.col_2 = [];
  $scope.listCount = 1;
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

}]);
