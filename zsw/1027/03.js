console.log("nodejs代码内部的this = ",this);//{}
console.log(this === module.exports);//???
function fun (){
  console.log("函数内部this = ",this);//global
  console.log(this === global);//true
};
var timer = setTimeout(function(){
  console.log("setTimeout内部普通函数this = ",this);//timeout{..............}
  console.log("普通函数定时器",this === timer);//true
},1000);
var timer2 = setTimeout(() =>{
  console.log("setTimeout内部箭头函数 this = ",this);//{}
  console.log("箭头定时器",this ===timer2);//false
},1000);
