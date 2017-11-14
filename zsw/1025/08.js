var fs = require("fs");
//追加的内容
fs.appendFile("test.md","apple",(err)=>{
  console.log(err);
});
