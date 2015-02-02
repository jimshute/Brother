## 校招团队导出单个BU数据
#### 接口类型
	GET
#### 请求URL
	/campus/export_bu.json
#### 请求参数
	bu_name: `bu的名称`
#### 返回接口
```js
{
 "down_link": "http: //oss.reflected.net/jenkins/99338/cm-12-20150131-NIGHTLY-bacon.zip", //文件下载链接
 "err": false, //错误
 "message": "--" //错误消息
}
```