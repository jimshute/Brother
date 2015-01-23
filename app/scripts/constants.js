/**
 * Created by yeyou.xj on 2015/1/22.
 */
//师弟状态
angular.module('app.constants').factory('StudentStatus', function() {
  return {
    '0': '无需HR跟进',
    '1': '需HR跟进',
    '2': '跟进中',
    '3': '已结束'
  };
});

//师兄跟进师弟状态
angular.module('app.constants').factory('BrotherTrackStatus', function() {
  return {
    '0': '从未跟进',
    '1': '一周未跟进',
    '2': '待HR沟通',
    '3': '已跟进',
    '4': '师弟已入职'
  };
});

//师兄沟通结果
angular.module('app.constants').factory('BrotherCommunicateResult', function() {
  return {
    '0': '确定来',
    '1': '确定不来',
    '2': '犹豫中'
  };
});

//HR跟进师兄状态
angular.module('app.constants').factory('HrgTrackBrotherStatus', function() {
  return {
    '0': '超时',
    '1': '正常',
    '2': '已催促'
  };
});

//HR跟进师弟状态
angular.module('app.constants').factory('HrgTrackStatus', function() {
  return {
    '0': '待HR跟进',
    '1': '无需HR跟进',
    '2': '已跟进'
  };
});

//HR沟通结果
angular.module('app.constants').factory('HrgCommunicateResult', function() {
  return {
    '0': '确定来',
    '1': '确定不来',
    '2': '待沟通'
  };
});

//
angular.module('app.constants').factory('Cause', function() {
  return {
    '0': '户口',
    '1': '薪资',
    '2': '工作内容',
    '3': '地域',
    '4': '家庭',
    '5': '其他'
  };
});
