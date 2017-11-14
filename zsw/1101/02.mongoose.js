var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error',function(error){
  console.log("connect error",error);
});
db.on('open',function(){
  console.log("connect ok");
});
mongoose.connect("mongodb://127.0.0.1:8000/1101",{useMongoClient:true});
var Schema = mongoose.Schema;
var stuSchema = new Schema({name:String,age:Number,gender:Number});
var StuOne = mongoose.model("One",stuSchema);
new StuOne({name:'zhangsan',age:10,gender:0}).save(function(err,data){
  if(!err){
    console.log("insert ok",data);
  }else{
    console.log(err);
  }
  mongoose.disconnect();
});
