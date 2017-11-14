var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get("/test",function(req,res){
  res.type("text/html");
  res.status(200);
  res.send("<h1>/test</h1>")
});


app.get("/test/:number/:price",function(req,res){
  console.log(req.params);
  res.status(200);
  res.send();
});

app.get("/data",function(req,res){
  res.status(200);
  res.type("json");
  res.send({value:10});
});
var options = {
  root:__dirname + "/public"
};

app.get("/file",function(req,res){
  res.sendFile("/files/stu.json",options,function(err){
    if(!err){
      console.log("send ok");
    }else{
      console.log(err);
      res.status(404).end();
    }
  });
});
http.createServer(app).listen(8000,function(){
  console.log("监听8000...");
});
