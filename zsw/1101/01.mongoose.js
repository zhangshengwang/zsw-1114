var mongoose = require('mongoose');
var url = "mongodb://127.0.0.1/1101";
var db = mongoose.connection;
db.on('error',function(error){
  console.log("connect mongodb server error");
});
db.on('open',function(){
  console.log("数据库连接成功");
});
mongoose.connect(url,{useMongoClient:true});
