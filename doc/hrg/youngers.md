## hrg列出师弟列表
#### 接口类型
	GET
#### 请求URL
	/hrg/youngers.json
#### 请求参数
	keywords: `搜索关键字`
	start: `起始数据`
	limit: `数据数目`
	sort: `排序列`
	asc: `正序（是、否）`
	status: `师弟状态（）`
#### 返回接口
```js
{
 "comfirm_number": "--", //确定来的人数
 "hesitate_number": "--", //犹豫中的人数
 "abandon_number": "--", //确定不来的人数
 "untrack_number": "--", //从未跟进的人数
 "untrack_1w_number": "--", //一周未跟进的人数
 "normal_number": "--", //正常跟进的人数
 "youngers": [
  {
   "name": "--", //师弟姓名
   "bother_name": "--", //师兄姓名
   "comm_date": "--", //沟通日期
   "comm_type": "--", //沟通方式
   "status": "--", //师弟状态(无需HR跟进、需HR跟进）
   "comm_result": "--", //沟通结果(确定不来、犹豫中、确定来）
   "reason": "--", //原因分类
   "hr_track_result": "--" //hr跟进结果(无需跟进、已跟进）
  }
 ]
}
```