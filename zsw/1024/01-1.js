var http = require("http");
var server = http.createServer(function(req,res){
  console.log(req.url);
  res.writeHead(200,{'Content-Type':"text/html"});
  res.write("<h1> i  am   srever</h1>");
  res.end();
});
server.listen(8000,function(){
  console.log("监听8000");
});




// var http = require("http");
// var server = http.createserver(function(req,res){
//   console.log(req.url);
//   res.writeHead("200",{'Content-Type':text/html});
//   res.write("<h1>i am server </h1>");
//   res.end();
// });
// server.listen(8000,function(){
//   console.log("监听8000");
// });
