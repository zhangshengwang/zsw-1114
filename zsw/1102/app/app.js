var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app  = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",function(req,res){
  res.status(200);
  res.type("text/html");
  res.sendFile("/index.html");
});
app.get("/data",function(req,res){
  console.log("req.hostname = ",req.hostname);
  console.log("req.ip = ",req.ip);
  console.log("req.protocol = ",req.protocol);
  console.log("req.baseUrl = ",req.baseUrl);
  console.log("req.originalUrl = ",req.originalUrl);
  console.log("req.cookies = ",req.cookies);
  console.log("req.query = ",req.query);
  console.log("req.body = ",req.body);
  console.log("req.path = ",req.path);
  res.status(200);
  res.type("application/json");
  res.json({name:'lisi',age:20});
});
app.post("/data",function(req,res){
  console.log(req.body);
  res.status(200);
  res.json({status:1});
});
app.use(function(req,res){
  res.status(404);
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});
app.listen(8000,function(){
  console.log("listen 8000...");
});
