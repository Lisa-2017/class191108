/*
  题目：从url输入地址到最终网页渲染，中间发生了什么？
    1. DNS解析
      负责将域名地址解析成ip地址
      （4个缓存一个递归查询）
        1. 浏览器缓存
        2. 计算机缓存
        3. 路由器缓存
        4. 网络运营商缓存
        5. 递归查询 域名服务器 a.b.c.com
          .com
          c.om
          b.c.com
          a.b.c.com
    2. 建立连接：TCP三次握手
      指的是客户端和服务端建立TCP连接，要进行三次通信。 
      Connection: keep-alive 保持长连接，复用TCP连接
    3. 发送请求
      按照HTTP协议规定，生成HTTP请求报文，发送给服务器
    4. 返回响应
      按照HTTP协议规定，生成HTTP响应报文，发送给客户端
    5. 渲染页面
      浏览器由很多模块组成：HTML解析模块、CSS解析模块、JS引擎...
      1. 遇到HTML代码，浏览器调用HTML解析器，将HTML解析成DOM树 
      2. 遇到CSS代码，浏览器调用CSS解析器，将CSS解析成CSSOM树
      3. 遇到JS代码， 浏览器调用JS引擎解析JS代码，
        JS代码可能会进行DOM操作，修改DOM树
        JS代码可能会进行CSS操作，修改CSSOM树
      4. 将DOM树 + CSSOM树 = render树
      5. 布局（layout）：计算所有元素大小和位置
      6. 绘制（paint）：渲染颜色（给每一个像素加上颜色）  

      重绘、重排（回流）：一般JS代码修改了DOM或CSS，会导致重新布局，重新绘制
      重绘：页面重新绘制，（页面发生变化）：color
      重排：页面重新布局，一般元素大小或位置发生变化  top left width height
        重排一定会导致重绘，但重绘不一定导致重排
    6. 断开连接：TCP四次挥手
      指的是请求/响应分别需要断开两次，才能终止。所以一共有四次挥手

*/
