//箭头函数的this和普通函数不一样
//函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
var obj = {
  value:10,
  getValue:()=>{
    console.log(this.value);//undefined
  },
  getValue2:function(){
    console.log(this.value);//10
  }
};
obj.getValue();
obj.getValue2();


var number = 0;
function fun(){
  console.log("fun函数内部this ==",this);//fun函数内部this == { number: 100 }
  setTimeout(function(){
    console.log(this.number);
  },3000);
}
fun.call({number:100});
