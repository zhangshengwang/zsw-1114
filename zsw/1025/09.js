var fs = require('fs');

//fs.open打开文件获得文件描述符(非负的整数);
//r,w,r+,w+,a+的意义
fs.open("hello.txt","r+",(err,fd)=>{
  //此处的fd代表了hello.txt这个文件
  console.log(`文件描述符为:${fd}`);

  //指定位置填写内容
  fs.write(fd,"我爱中国",20,(err,len,str)=>{
    console.log(err);
    console.log(len);//写进去的字节个数(不是字符个数)
    console.log(str);//写进去的字符
  });
});
