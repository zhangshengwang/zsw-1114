var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function(req,res){
  var myURL = url.parse(req.url,true);
  if(myURL.pathname ==='/'){
    fs.readFile("./index.html","utf8",function(err,data){
      if(!err){
        res.writeHead(200,{'Content-Type':"text/html"});
        res.end(data);
      }else{
        res.writeHead(500,{'Content-Type':"text/html"});
        res.end("<h1>server inner error!</h1>");
      }
    });
  }else if(myURL.pathname ==='/students' && req.method === 'GET'){
    fs.readFile("./stus.json","utf8",function(err,data){
      if(!err){
        var limit = myURL.query.limit;
        var temp = (JSON.parse(data)["stus"]).slice(0,limit);
        var str = JSON.stringify({data:temp});
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(str);
      }else{
        res.writeHead(500,{'Content-Type':"text/html"});
        res.end("<h1>server inner error!</h1>");
      }
    });
  }else{
    res.writeHead(404,{'Content-Type':"text/html"});
    res.end("<h1>not found!</h1>");
  }
});
server.listen(8000,function(){
  console.log("监听8000...");
});
