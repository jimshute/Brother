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
	asc: `正序（asc、desc）`
	track_filter: `师弟跟进结果（数字，以“_”隔开）`
	track_mentor_filter: `跟进师兄状态（数字，以“_”隔开）`
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
   "student_name": "Jose Taylor", //师弟姓名
   "mentor_name": "Shirley Lee", //师兄姓名
   "communicate_date": "2013-02-11", //沟通日期
   "communicate_type": "电话", //沟通方式
   "status": "无需HR跟进", //师弟状态(无需HR跟进、需HR跟进）
   "communicate_result": "确定不来", //沟通结果(确定不来、犹豫中、确定来）
   "cause": "xxxxxxx", //原因分类
   "hr_track_result": "无需跟进", //hr跟进结果(无需跟进、已跟进、未跟进）
   "communicate_record": "xxxxxxx", //师兄沟通记录
   "hr_communicate_record": "xxxxxxx", //HR沟通记录
   "hr_track_mentor_result": "超时", //HR跟进师兄结果
   "phone": "11111111111", //师弟电话
   "email": "xxxxxxx@mock2easy.com", //师弟邮箱
   "school": "xxxxxxx", //师弟学校
   "major": "xxxxxxx", //师弟专业
   "education": "xxxxxxx", //师弟学历
   "student_id": "320000200602234658", //师弟ID
   "mentor_id": "360000197203192385" //师兄ID
  }
 ],
 "count": "0" //总条目数
}
```