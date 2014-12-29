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
   "communicate_date": "--", //跟进日期
   "status": "--", //历史状态（确定来、犹豫中、确定不来）
   "comm_record": "--", //沟通记录
   "comment": "--", //沟通备注
   "cause": "--" //原因分类
  }
 ],
 "student_name": "--" //师弟姓名
}
```