var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error',function(error){
  console.log(error);
});
db.on('open',function(){
  console.log("connect ok!");
});

//使用用户名，密码连接
//authSource = admin,其中admin是创建用户名时指定的db名称，必须一致
mongoose.connect("mongodb://zsw:741@127.0.0.1/test?authSource=admin",{useMongoClient:true});
var Schema = mongoose.Schema;
var stuSchema = new Schema({
  name:String,
  age:Number,
  gender:Number
});
var StuOne = mongoose.model("One",stuSchema);
StuOne.remove({age:{$gte:20}},function(err,obj){
  if(!err){
    console.log(obj.result);
  }else{
    console.log(err);
  }
  db.close();
});
