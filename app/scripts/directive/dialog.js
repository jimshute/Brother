/**
 * Created by Jim on 2015/1/3.
 */
'use strict';
angular.module('app.directive').directive('dialog', ['$http', '$sce', function ($http, $sce) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: [
      '<div ng-show="showDialog" class="mask">',
        '<div class="kuma-dialog" style="width: {{width || \'100%\'}}; height: {{height || \'auto\'}}">',
          '<div class="kuma-dialog-content" style="position: relative;">',
            '<div class="kuma-dialog-close" ng-click="close()">&times;</div>',
            '<div class="kuma-dialog-title">{{title || "无标题"}}</div>',
            '<div class="kuma-dialog-container dialog-content">',
              '<div class="kuma-dialog-operation icon-space button-group">',
              '</div>',
            '</div>',
          '</div>',
        '</div>',
      '</div>'
    ].join(''),
    scope: {
      title: '@',
      //contentTemplate: '=',
      //contentTemplateUrl: '=',
      //dialogType: '=', //yes-no, ok-cancel, save-discard-cancel, sav-cancel, ok
      showDialog: '=',
      width: '@',
      height: '@'
    },
    controller: function ($scope, $element, $attrs, $transclude) {

      $transclude(function(clone, scope) {
        var contentBlock = $element.find('.dialog-content');
        var buttonGroup = $element.find('.button-group');
        contentBlock.prepend(clone.filter('.content'));
        var buttonsConfirm = clone.filter('.kuma-dialog-confirm');
        var buttonsCancel = clone.filter('.kuma-dialog-cancel');
        buttonGroup.append(buttonsConfirm);
        buttonGroup.append(buttonsCancel);
      });

      $scope.close = function() {
        $scope.showDialog = false;
      };

    },

    link: function ($scope) {
      //console.log('loading... dialog');
    }
  };
}]);
