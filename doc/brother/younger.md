## 师兄列出师弟列表
#### 接口类型
	GET
#### 请求URL
	/brother/younger.json
#### 返回接口
```js
{
 "--": [
  {
   "name": "--", //师弟姓名
   "avatar": "--", //师弟头像
   "phone": "--", //师弟电话
   "mail": "--", //师弟邮箱
   "status": "--", //跟进状态(超时未沟通、从未跟进、正常)
   "education": "--", //教育
   "track_history": [
    {
     "date": "--", //记录日期
     "track_status": "--", //历史状态(确定来、犹豫中、确定不来)
     "comm_log": "--", //沟通记录
     "comm_remark": "--", //沟通备注
     "hesitate_reason": "--", //犹豫原因
     "abandon_reason": "--" //不来原因
    }
   ]
  }
 ]
}
```