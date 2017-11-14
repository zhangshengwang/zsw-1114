var fs = require('fs');
var http = require('http');
var url = require('url');
var socketIO = require('socket.io');
 var server = http.createServer(function(req, res){
  //req.url
  var myURL = url.parse(req.url, true);

  if (myURL.pathname === "/"){
    //发给用户一个html页面
    fs.readFile("./login.html", "utf8", function(err, data){
      if (!err){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
      }
    });

  } else if (myURL.pathname === "/admin.html" && req.method === 'POST'){
    fs.readFile("./admin.html", "utf8", function(err, data){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end();

});
  }else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("<h1>Not Found!</h1>");
  }

}).listen(8000, function(){
  console.log("listen 8000...");
});
var io = socketIO(server);
io.on('client message',function(data,fn){
  console.log("客户端的数据",data);
  fn("我是server,收到了");
})
