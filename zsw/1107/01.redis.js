//导入redis 模块
var redis = require('redis');
//连接redis 服务器
var client = redis.createClient({host:'127.0.0.1',port:6379,password:"123"});
client.on('connect',function(){
  console.log("connect ok");
});
client.on('end',function(){
  console.log("disconnect");
});

//处理连接错误
client.on('error',function(err){
  console.log("connect error:",err);
});


//可以在添加时，指定过期时间10s
//client.set('key','value','EX',10);

//对所有key值，都可设置过期时间
//client.expire('key',10);


//添加或修改
client.set("name","lisi one",function(err,reply){
  if(!err){
    console.log("set reply = ", reply);//OK

    //查找key
    client.get("name",function(err,reply){
      if(!err){
        console.log("get reply = ",reply);//lisi one

        //删除操作
        client.del('name',function(err,reply){
          if(!err){
            console.log("del reply = ",reply);//1
            client.quit();
          }else{
            throw err;
          }
        });
      }else{
        throw err;
      }
    });
  }else{
    console.log("error = ",err);
  }
});
