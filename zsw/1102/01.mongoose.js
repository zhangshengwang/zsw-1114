var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error',function(error){
  console.log(error);

});
db.on('open',function(){
  console.log("connect ok!");
});
mongoose.connect("mongodb://127.0.0.1/test",{useMongoClient:true});

var Schema = mongoose.Schema;

//创建一个Schema
var stuSchema = new Schema({
  name:String,
  age:Number,
  grnder:Number
});

//创建一个model
var StuOne = mongoose.model("One",stuSchema);
StuOne.find({gender:0,age:{$gt:40}},null,function(err,docs){
  if(!err){
    console.log(docs);//数组
  }else{
    console.log(err);
  }
  db.close();
});
