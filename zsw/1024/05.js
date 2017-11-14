var EventEmitter = require("events");
var eventOne = new EventEmitter();
eventOne.on("custom_event_2",function(value){
  console.log("触发2：",value);
});
var handler = function(value){
  console.log("触发1111：",value);
};
eventOne.on("custom_event_1",handler);
eventOne.on("custom_event_1",function(value){
  console.log("触发1：",value);
  //事件回调函数内部，this === eventOne
  this.removeListener("custom_event_1",handler);
});
setTimeout(function(){
  eventOne.emit("custom_event_1",Math.floor(Math.random() * 10 + 10));
  eventOne.emit("custom_event_2",Math.floor(Math.random() * 10 + 10));
  eventOne.emit("custom_event_1",Math.floor(Math.random() * 10 + 10));
  //eventOne.removeAllListeners("custom_event_1");移除事件所有函数
  //eventOne.removeAllListener();移除所有事件及所有函数
},3000);
//触发顺序与注册顺序无关
