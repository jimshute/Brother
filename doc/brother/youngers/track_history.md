## 师弟跟进记录
#### 接口类型
	GET
#### 请求URL
	/brother/youngers/track_history.json
#### 请求参数
	younger_id: `师弟的Id`
	limit: `查询记录条数`
#### 返回接口
```js
{
 "histories": [
  {
   "communicate_date": "2013-02-11", //跟进日期
   "status": "0", //历史状态（确定来、犹豫中、确定不来）
   "communicate_record": "xxxxxxx", //沟通记录
   "comment": "xxxxxxx", //沟通备注
   "cause": "户口", //原因分类
   "communicate_result": "0"
  }
 ],
 "student_name": "Angela Jackson" //师弟姓名
}
```