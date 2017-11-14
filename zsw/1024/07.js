console.log("__dirname = ", __dirname);
console.log("__filename = ", __filename);
//引入其他代码
require("./test.js");
//定义在global上的才是全局变量，可以在任意模块使用
console.log(global.value);
console.log(value);

//此处的a只可在当前代码用，不是全局变量
var a = 10000;
