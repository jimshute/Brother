## 校招团队列表BU列表
#### 接口类型
	GET
#### 请求URL
	/campus/bu_list.json
#### 请求参数
	keyword: `搜索关键字`
	start: `分页起始位置`
	limit: `条数`
#### 返回接口
```js
{
 "bu": "--", //事业部名称
 "offer_number": "--", //offer人数
 "mentor_communicate_number": "--", //师兄人数
 "brother_communicate_result": { //师兄沟通结果
  "confirm": "@number", //确定来的人数
  "abandon": "--", //确定不来的人数
  "hesitate": "--" //犹豫中的人数
 },
 "hr_result": { //hr沟通结果
  "confirm": "--", //确定来的人数
  "abandon": "--", //确定不来的人数
  "not_communicated": "--" //待沟通
 },
 "brother_track_result": { //师兄跟进结果
  "never": "--", //从未跟进的人数
  "gt_1w": "--", //超过1周未跟进的人数
  "not_communicated": "--" //待沟通
 },
 "hr_track_result": { //hr跟进师兄结果
  "urged": "--", //已催促的人数
  "not_urged": "--" //未催促的人数
 }
}
```