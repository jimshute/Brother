/**
 * Created by yeyou.xj on 2014/12/29.
 */
angular.module('app.hrg').controller('hrgController', ['$scope', function($scope) {
  console.log('Hello, Hrg');
  $scope.init = function() {

    $('#top-tab a').click(function() {
      $('#top-tab .active').removeClass('active');
      $(this).parent('li').addClass('active');
    });


  }
}]);
