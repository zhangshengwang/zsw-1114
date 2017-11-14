var os = require('os');
var cluster = require('cluster');
if(cluster.isMaster){
  cluster.fork();
  cluster.fork();
  console.log(cluster.workers);
}else{
  setInterval(()=>{},2000);
}
