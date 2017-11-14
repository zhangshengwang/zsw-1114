var EventEmitter = require("events");
var eventOne = new EventEmitter();
eventOne.on("custom_event",function(obj){
  console.log("自定义事件被触发:",obj);
});
setTimeout(function(){
  eventOne.emit("custom_event",{value:100})
},3000);
