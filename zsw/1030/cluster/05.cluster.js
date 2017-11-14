var os = require('os');
var cluster = require('cluster');
if(cluster.isMaster){
  var worker = cluster.fork();
  worker.send("主进程给子进程发送了消息");
  worker.on('message',function(mesg){
    console.log("父进程接收消息",mesg);
  });

}else{
  process.on('message',function(mesg){
    console.log("子进程接收消息:",mesg);
  });
  setInterval(()=>{
    process.send("子进程给主进程发的消息");
  },2000);
}
