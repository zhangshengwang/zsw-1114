var cluster = require('cluster');
var os = require('os');
var http = require('http');
if(cluster.isMaster){
  console.log("主进程代码运行空间");
  for(var i = 0,n = os.cpus().length; i < n;i++){
    var newWorker = cluster.fork();
    console.log("新创建的进程pid = ",newWorker.process.pid);
  }
}else{
  console.log("子代码运行空间");
  http.createServer(function(req,res){
    console.log(`子进程${process.pid}接收了请求`);
    res.writeHead(200);
    res.end();
  }).listen(8000,function(){
    console.log(`子进程${process.pid}监听8000..`)
  });
}
