var http = require('http');
var fs = require('fs');
var url = require('url');
var socketIO = require('socket.io');
var server = http.createServer(function(req,res){
  var myURl = url.parse(req.url);
  if(myURl.pathname === '/' && req.method === 'GET'){
    fs.readFile("./index.html","utf8",function(err,data){
      if(!err){
        res.writeHead(200,{"Content-Type":'text/html'});
        res.end(data);
      }else{
        res.writeHead(500,{'Content-Type':'text/html'});
        res.end("<h1>server inner error!</h1>");
      }
    });
  }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end("<h1>not found !</h1>");
  }
});
server.listen(8000,function(){
console.log("监听8000")
});
var io = socketIO(server);
io.on('connection',function(socket){
  socket.broadcast.emit('user connect',`${socket.nickname} 上线`);
  socket.on('disconnect',function(){
    socket.broadcast.emit('user disconnect',`${socket.nickname} 退出`);
  });
  socket.on('client message',function(data,fn){

  });
  socket.emit('server message','...');
});
