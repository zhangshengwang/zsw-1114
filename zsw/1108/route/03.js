var http = require('http');
var express = require('express');
var app = express();
var routers = require("./routers.js");
app.use("/user",routers.router1);
app.use('/admin',routers.router2);
http.createServer(app).listen(8000,function(){
  console.log("listen 8000");
});
