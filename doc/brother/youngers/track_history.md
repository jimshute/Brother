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
   "date": "--", //跟进日期
   "history_status": "--", //历史状态（确定来、犹豫中、确定不来）
   "comm_log": "--", //沟通记录
   "comm_remark": "--", //沟通备注
   "hesitate_reason": "--", //犹豫原因
   "abandon_reason": "--" //不来原因
  }
 ],
 "name": "--" //师弟姓名
}
```