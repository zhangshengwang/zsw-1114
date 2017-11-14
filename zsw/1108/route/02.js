var http = require('http');
var express = require('express');
var app = express();
var router1 = express.Router();
var router2 = express.Router();
router1.get("/one",function(req,res,next){
  console.log("router1 执行");
  next();
});
router2.get("/one",function(req,res){
console.log("router2 执行")  ;
res.type("text/html");
res.status(200);
res.send("<h1>路由为 /one的二次处理</h1>");
});

//一个路由可以经过多次传递执行，但是传递时必须保证路由一样
app.use(router1,router2);
http.createServer(app).listen(8000,function(){
  console.log("listen 8000");
});
