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
   "student_name": "Jennifer Williams", //师弟姓名
   "avatar": "http: //dummyimage.com/80x80", //师弟头像
   "phone": "11111111111", //师弟电话
   "email": "xxxxxxx@mock2easy.com", //师弟邮箱
   "track_status": "0", //跟进状态(超时未沟通、从未跟进、正常)
   "education": "rukspydfl | bai | nfsm", //教育（学校 | 专业  学位）
   "track_history": [
    {
     "communicate_date": "2013-02-11", //记录日期
     "status": "0", //历史状态(无需HR跟进、需HR跟进、已跟进)
     "communicate_record": "xxxxxxx", //沟通记录
     "comment": "xxxxxxx", //沟通备注
     "communicate_result": "0", //沟通结果(确定来、犹豫中、确定不来)
     "cause": "户口" //原因分类
    }
   ],
   "student_id": "320000199007111607" //师弟ID
  }
 ]
}
```