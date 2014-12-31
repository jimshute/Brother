## 师兄列出师弟列表
#### 接口类型
	GET
#### 请求URL
	/brother/younger.json
#### 返回接口
```js
{
 "students": [
  {
   "student_name": "Daniel Jackson", //师弟姓名
   "avatar": "http: //dummyimage.com/6400", //师弟头像
   "phone": "11111111111", //师弟电话
   "email": "xxxxxxx@mock2easy.com", //师弟邮箱
   "status": "超时未沟通", //跟进状态(超时未沟通、从未跟进、正常)
   "education": "rdvqlt | ielc | tux", //教育（学校 | 专业  学位）
   "track_history": [
    {
     "communication_date": "2013-02-11", //记录日期
     "track_status": "确定来", //历史状态(确定来、犹豫中、确定不来)
     "communication_record": "xxxxxxx", //沟通记录
     "comment": "xxxxxxx", //沟通备注
     "communication_result": "vqnsjdfyif|@word", //沟通结果(确定来无需HR跟进)
     "cause": "户口" //原因分类
    }
   ]
  }
 ]
}
```