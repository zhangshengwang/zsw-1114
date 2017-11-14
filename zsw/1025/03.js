var fs = require('fs');
//不写编码格式，默认将内存数据以16进制输出
fs.readFile("./nodejs.md","utf8",function(err,data){
  //没有错误时，err===null
  if(!err){
    console.log("readFile 读取的内容为：",data);
  }
});
//readlink需要注意，和操作系统有关系，linux读取到的是原文件名
// fs.readlink("./01.fs.link.lnk","utf8",function(err,data){
//   //无错误时，err === null
//   console.log(err);
//   if(!err){
//     console.log("readlink读取的内容为：",data);
//   }
// });
// var data = fs.readFileSync("../nodejs.md","utf");
// console.log(data);


//readFile只能读取普通文件
fs.readFile(".",function(err,data){
  console.log("readFile错误",err);
  console.log("readFile读取目录："，data);
});
console.log("after...");
