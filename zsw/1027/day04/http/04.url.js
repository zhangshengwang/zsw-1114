
var querystring = require('querystring');
var url = require('url');

//返回一个URL对象
// 第二个参数，决定了是否对查询字符串进行转换
var myURL = url.parse("https://www.baidu.com/one/two?name=lisi&age=10#20", true);
console.log(myURL.query);//{name: 'lisi', age: '10'}


//可以使用querystring自己进行转换
var myURL2 = url.parse("https://www.baidu.com/one/two?name=lisi&age=10#20");
//myURL2.query  "name=lisi&age=10"
console.log(querystring.parse(myURL2.query));//{name: 'lisi', age: '10'}





var myURL3 = url.parse("https://www.baidu.com/s?wd=nodejs%20%E4%B8%AD%E7%9A%84%E6%9F%A5%E8%AF%A2%E5%AD%97%E7%AC%A6%E4%B8%B2&rsv_spt=1&rsv_iqid=0xef624cf000049fe4&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&inputT=14844&rsv_t=9647sPyYcEsKeSTO%2Bscmm1RKgMcab7ZNGCnVF7FlKBRiikO2GRWYhGUcBmIPDAn5VN0B&rsv_sug3=76&oq=node%2520req.url%253D%252F%2520%25E6%2598%25AF%25E4%25BB%2580%25E4%25B9%2588%25E6%2584%258F%25E6%2580%259D&rsv_pq=ee9c97650003c053&rsv_sug1=41&rsv_sug7=100&rsv_sug2=0&rsv_sug4=16427",true);
//console.log(querystring.parse(myURL3.query));     //不加true
//等价于
console.log(myURL3.query);
