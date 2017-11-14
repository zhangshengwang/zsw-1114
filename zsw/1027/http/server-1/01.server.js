var fs = require('fs');
var http = require('http');
var url = require('url');
http.createServer(function(req,res){
  var myURl = url.parse(req.url,true);
  if(myURL.pathname ==="/"){
    fs.readFile("./test.html","utf8",function(err,data){
      if(!err){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
  }else if(myURL.pathname === "./stu" && req.method ==='POST'){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>submit OK</h1>");
  }else if(myURL.pathname === "./test.css" && req.method ==='GET'){
    fs.readFile("./test.css","utf8",function(err,data){
      if(!err){
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(data);
      }
    });
  }else{
    res.writeHead(404,{"Content-Type":"text/html"});
    res.end("<h1>Not Found</h1>");
  }
}).listen(8000,function(){
  console.log("listen 8000");
});
