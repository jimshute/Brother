## 校招团队获取BU列表
#### 接口类型
	GET
#### 请求URL
	/campus/bu_list.json
#### 请求参数
	limit: `查询条目数`
	start: `查询起始位置`
	keyword: `查询关键字`
#### 返回接口
```js
{
 "bu_list": [
  {
   "bu": "xxxxxxx", //事业部名称
   "offer_number": "0", //offer人数
   "mentor_communicate_number": "0", //师兄人数
   "brother_communicate_result": { //师兄沟通结果
    "confirm": "0", //确定来的人数
    "abandon": "0", //确定不来的人数
    "hesitate": "0" //犹豫中的人数
   },
   "hr_result": { //hr沟通结果
    "confirm": "0", //确定来的人数
    "abandon": "0", //确定不来的人数
    "not_communicated": "0" //待沟通
   },
   "brother_track_result": { //师兄跟进结果
    "never": "0", //从未跟进的人数
    "gt_1w": "0", //超过1周未跟进的人数
    "not_communicated": "0" //待沟通
   },
   "hr_track_result": { //hr跟进师兄结果
    "urged": "0", //已催促的人数
    "not_urged": "0" //未催促的人数
   }
  }
 ]
}
```