//on注册函数
//正常退出会触发，手动调用processexit()不会触发
process.on('beforeExit',function(code){
  console.log("beforeExit:",code);
});



//只要退出就会触发
process.on('exit',function(code){
  console.log("exit:",code);
});
for(var i = 0;i < 15;i++){
  console.log(i);
}
console.log(`process.pid = ${process.pid}`);
//当前进程编号，当前进程结束后，进程号就不在是当前进程的了
process.exit(0);
