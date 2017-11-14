/**
封装函数，实现水平匀速移动
function move(elem,step,interval,target);
elem:要移动的元素
step:每次移动的步长
intetval:定时器的间隔时间
target:最终位置
***/
function linearMove (elem,target,step,interval){


  //定义参数默认值，用户没传入时可使用默认值
  var step = step || 10;
  var interval = interval || 50;


  //每次清除已有的定时器
  //将定时器id挂在自身的dom对象上可不用设置全局变量
  clearInterval(elem.timer);


  //由起点和终点判断步长的正负
  step = (box.offsetLeft < target) ? step : -step;
  elem.timer = setInterval(function(){
    box.style.left = box.offsetLeft + step + "px";


    //当距离不到一步时，强制设为终点
    if(Math.abs(target - box.offsetLeft) < Math.abs(step)){
      box.style.left = target + "px";
      clearInterval(elem.timer);
    }
  },interval);
}

/********
封装函数，实现水平减速移动
fucntion slowDownMove(elem,interval,target);
elem:要移动的元素
interval:定时器的间隔时间
target:最终位置
******/
function slowDownMove(elem,target,step,interval){
  var interval = interval || 50;
  clearInterval(elem.timer);
  elem.timer = setInterval(function(){

    //获得减小的step
    var step = (target - box.offsetLeft) / 20;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    box.style.left = box.offsetLeft + step + "px";
    if(target === box.offsetLeft){
      clearInterval(elem.timer);
    }
  },interval);
}
