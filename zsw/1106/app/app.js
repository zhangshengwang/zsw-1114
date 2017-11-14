var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var redis = require('redis');
var client = redis.createClient({host:'127.0.0.1',port:6379,password:"123"});
var app = express();

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


var options = {
  root:__dirname + "/public"
};



app.get('/',function(req,res){
  res.status(200);//------------------------------
  res.sendFile("/html/index.html",options);
});


app.post("/login",function(req,res){
  var name = req.body.name;
  var passwd = req.body.passwd;
  if(('lisi' === name) && ('123' === passwd)){
    res.status(200);
    res.json({login:true, adminUrl:"/html/admin.html"});
client.hmset("information","username","lisi","password","123",function(err,reply){
  if(!err){
    console.log("hmset reply = ",reply);
  }
client.expire('username',10);
client.expire('password',10);
});

  }else{
    res.status(200);//-------------------------------------
    res.json({login:false});
  }
});


app.get("/admin",function(req,res){
  // if(('lisi' === name) && ('123' === passwd)){
  //   res.status(200);
  //   res.json({login:true, adminUrl:"/html/admin.html"});
  // }else{
  //   res.status(200);//-------------------------------------
  //   res.json({login:false});
  // }

  res.status(200);//-----------------------------------
  res.sendFile("/html/admin.html",options);
});




app.use(function(req,res){
  res.status(404);//------------------------------------------
  res.type("text/html");
  res.send("<h1>not found!</h1>");
});



var server = http.createServer(app);
server.listen(8000,function(){
  console.log("监听 8000 .....");
});
