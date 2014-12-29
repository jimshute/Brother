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
   "student_name": "--", //师弟姓名
   "avatar": "--", //师弟头像
   "phone": "--", //师弟电话
   "email": "--", //师弟邮箱
   "status": "--", //跟进状态(超时未沟通、从未跟进、正常)
   "education": "--", //教育
   "track_history": [
    {
     "communication_date": "--", //记录日期
     "track_status": "--", //历史状态(确定来、犹豫中、确定不来)
     "communication_record": "--", //沟通记录
     "comment": "--", //沟通备注
     "communication_result": "--", //沟通结果
     "cause": "--" //原因分类
    }
   ]
  }
 ]
}
```