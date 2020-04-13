/*导入http模块
var http=require("http");
//开启一个监听事件，每次Http请求都会触发这个事件
http.createServer(function(req,res){
	//把编码格式设置为utf-8
	res.write('<head><meta charset="utf-8"/></head>');
	res.write("服务器创建成功");
	//必须有结束事件
	res.end();
}).listen(8080)//设置监听端口号*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.post('/urlencoded', function(req, res){
    console.log(req.body);
    res.send(" post successfully!");
});
app.listen(3000);