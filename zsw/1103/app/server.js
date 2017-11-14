var http = require('http');
var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end();
});
server.listen(8000,function(){
  console.log('监听8000');
});
