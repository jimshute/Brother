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
 "comfirm_number": "0", //确定来的人数
 "hesitate_number": "0", //犹豫中的人数
 "abandon_number": "0", //确定不来的人数
 "untrack_number": "0", //从未跟进的人数（不要）
 "untrack_1w_number": "0", //一周未跟进的人数（不要）
 "normal_number": "0", //正常跟进的人数（不要）
 "youngers": [
  {
   "student_name": "Helen White", //师弟姓名
   "mentor_name": "Helen Williams", //师兄姓名
   "communicate_date": "2013-02-11", //沟通日期
   "communicate_type": "电话", //沟通方式
   "status": "无需HR跟进", //师弟状态(无需HR跟进、需HR跟进）
   "communicate_result": "确定不来", //沟通结果(确定不来、犹豫中、确定来）
   "cause": "xxxxxxx", //原因分类
   "hr_track_result": "无需跟进", //hr跟进结果(无需跟进、已跟进、未跟进）
   "communicate_record": "xxxxxxx", //师兄沟通记录
   "hr_communicate_record": "xxxxxxx", //HR沟通记录
   "hr_track_mentor_result": "超时" //HR跟进师兄结果
  }
 ],
 "count": "0" //总条目数
}
```