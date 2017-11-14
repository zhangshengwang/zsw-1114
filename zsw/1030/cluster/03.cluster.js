var os = require('os');
var cluster = require('cluster');
if(cluster.isMaster){
  for(var i = 0,n = os.cpus().length;i < n;i++){
    var worker = cluster.fork();
    console.log(`${worker.process.pid}进程创建`);
  }
  cluster.on('online',(worker)=>{
    console.log(`${worker.process.pid}已经开始运行`);
  });
  cluster.on('exit',(worker,code,signal)=>{
    console.log(`${worker.process.pid}被${signal}给杀死,结束状态码为${code}`);
    console.log("10s之后重启一个");
    setTimeout(()=>{
      var worker = cluster.fork();
      cosnole.log(`重新产生一个${worker.process.pid}`);
    },10000);
  });

}else{
  setInterval(()=>{
    console.log(`${process.pid}进程输出`);
  },2000);
}
