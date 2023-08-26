# Computer Nework

## 1. 跨域

### 1.1 什么是跨域？

### 1.2 跨域的解决方法？

- JSONP
  - JSONP 原理：利用 script 标签没有跨域限制的漏洞，网页可以得到其他来源动态产生的 json 数据。需要对方服务器支持，比如访问`<script src="https://imooc.com">`，同理访问`<script src="https://imooc.com/getData.js">`
- WebSocket
  - websocket 是 html5 的一个持久化协议，它实现了浏览器与服务器的全双工通信，同时也是一种跨域的解决方法。
  - 原生 websocket api 使用起来不太方便，我们使用 Socket.io，它封装得比较好，提供了更简单、灵活得接口，也对不支持 webSocket 的浏览器提供了向下兼容
- 跨域资源共享 cors
- postMessage
  - html5 xmlhttprequest level 2 中的 api，为数不多可以跨域操作的 window 属性之一
  - 解决问题：
    - 页面和其打开的新窗口的数据传递
    - 多窗口之间消息传递
    - 页面与嵌套的 iframe 消息传递
    - 上面三个场景的跨域数据传递
  - postMeassage 方法允许不同源的脚本采用异步方式进行有限的通信，可以实现跨文本、多窗口、跨域消息传递

## Cookie & Session

## Cookie、SessionStorage 和 localStorage 的区别

- 存储大小：

  - cookie 大小不超过 4k
  - sessionStorage 和 localStorage 可以达到 5M

- 有效时间：

  - cookie 在设置的过期时间之前一直有效，即使窗口和浏览器关闭
  - sessionStorage 数据在当前浏览器窗口关闭后自动删除
  - localStorage 数据不主动删除不消失

- 作用域不同：

  - cookie 在所有同源窗口是共享的，和 localStorage 一致
  - localStorage 只要在相同的协议、主机名、端口，就能读取同一份 localStorage
  - sessionStorage 除了协议、主机名、端口要一致，且要求同一标签页

- 数据的传递：
  - cookie 数据始终在同源的 http 请求中携带，会在浏览器和服务器间来回传递
  - sessionStorage 和 localStorage 不会自动把数据发送给服务器，仅在本地保存

## HTTP

### HTTP 报文格式

1. 请求报文

- 请求方式
- host：发送请求的页面所在的域
- connection：
- user-agent
- accept：浏览器可以处理的内容类型
- accept-language：浏览器使用的语言
- cache-control：
- if-modified-since
- if-none-match
- cookie
- referer
- origin

2. 响应报文

- 状态码和响应信息
- connection
- date
- server
- content-length
- content-type
- cache-control
- last-modified
- expires
- etag

3. content-type 常见的几种类型

- text/html
- text/plain
- image/pngg
- application/x-www-form-urlencoded
- application/json
- multipart/form-data

### HTTP1.0

1. 请求头和响应头：以 key-value 形式保存，协商了各种重要的信息
2. 状态码：
3. cache 机制：缓存以及下载过的数据，主要使用 header 里面的 If-Modified-Since、Expires 来做缓存判断的标准

### HTTP1.1

- 新的请求方法：http1.0 只有 get、post、head；http1.1 多六种，options、delete、put、patch、trace、connect
- 新的缓存处理：http1.0 主要使用 header 里面的 If-Modified-Since、Expires 作为缓存判断的标准；http1.1 引入更多的缓存控制策略，Entity-tag、If-Unmodified-Since、If-Match、If-None-Match 等更多的缓存头来控制缓存
- 带宽优化及网络连接的使用：http1.1 在请求头添加 range 头域，允许请求资源的某一部分，返回码为 206
- 错误通知管理：http1.1 新增了 24 个错误状态响应码
- host 头处理：http1.1 的请求消息和相应消息都支持 host 头域，且请求消息中没有 host 会报 400 bad request 错误
- 长连接：http1.1 支持一个 tcp 连接上可以传送多个 http 请求和相应，减少建立和关闭连接的消耗和延迟，默认开启 connection:keep-alive
- 引入 CDN：并同时为每个域名维护 6 个连接，这样就大大减轻了整个资源的下载时间

### HTTP2.0

- 多路复用：即连接共享，每一个 request 都是用作连接共享机制的，一个 request 对应一个 id，这样一个连接上有多个 request，接收方可以通过 request 的 id 来讲请求归属到不同的服务端请求里面
- 二进制格式：http1.x 解析基于文本，http2.0 基于二进制格式，适用场景比较多
- 头部压缩：http2.0 采用 encode 来减少传输的 header 的大小，双方各自 cache 一份 header fields 表，既避免了重复的 header 请求，又减少了需要传输的大小
- 请求优先级：可以设置请求的优先级，会优先处理优先级高的请求
- 服务端推送：不需要等到客户端发起连接才发送数据，服务器可以自主向浏览器推送数据，比如访问 index.html 文件的时候，连同 css 或者图片资源发送给浏览器

### HTTP3.0

- 实现了类似 tcp 的流量控制、传输可靠性的功能。提供了数据包重传、拥塞控制以及其他一些 tcp 中存在的特性
- 继承了 TLS 加密功能，减少了握手所花费的 rtt 个数
- 实现了 http2 中的多路复用功能。实现了数据流的单独传输，解决了 tcp 中对头阻塞问题
- 实现了快速握手功能，QUIC 是基于 udp 的，可以实现使用 0-rtt 或者 1-rtt 来建立连接

## tcp 三次握手

- 第一次握手：客户端发送请求连接报文，进行 syn_wait 状态，报文 syn=1，seq=x；
- 第二次握手：服务端接收报文，如果确认连接，发送 syn=1，ACK=1，ack=x+1，seq=y 的报文，进入 syn_rcvd；
- 第三次握手：客户端接收到服务器发送的报文，向服务端发送 ACK=1，ack=y+1，seq=x+1 的报文，进入 established，待服务器收到确认包之后也进入 established 状态，结束

### 二次握手可以吗？

不可以，四个方面：

- 确认双方的收发能力
- 序列号可靠同步
- 阻止重复的历史连接初始化
- 安全问题

## tcp 四次挥手

- 第一次挥手：客户端发送断开连接请求，FIN=1,seq=u，进入 FIN_WAIT_1 状态
- 第二次挥手：服务端接收请求，发送 ACK=1,seq=v,ack=u+1 的报文，进入 close_wait 状态，客户端接收后进入 fin_wait_2 状态
- 第三次挥手：服务端发送 FIN=1, seq=w, ack=u+1 的报文，进入 LAST_ACK 状态
- 第四次挥手：客户端收到服务器的 FIN 包，发出确认报 ACK=1, ack=w+1,seq=u+1 进入 time_wait 状态，然后等待两个 MSL 之后，进入 closed 状态，而服务器收到确认包之后也进入 closed，这时结束。

## 跨域资源共享 CORS

1. 允许浏览器向跨源服务器发送 XMLHttpRequest 请求，从而克服 AJAX 只能同源使用的限制

## 前端安全

### CSRF 攻击（跨站请求伪造）

#### 概念

- 就是当用户访问黑客网站，在该网站进行的操作会操作到其他网页上，主要利用用户的登录状态发起的跨站请求
- 三个必要条件：

  - 目标站点（服务器端）一定要有 CSRF 漏洞；
  - 用户需要登录目标站点，并且在浏览器上保持有该站点的登录状态
  - 需要用户打开一个第三方站点

#### 类型

- 自动发起 get 请求
  - 举例：在恶意网站中，有一个图片 src 对应一个转账 api，当用户被引诱进黑客的页面，页面被加载的时候，浏览器就会自动发起 img 资源请求，同时，借用用户的登录状态，完成转账的操作
- 自动发起 post 请求
  - 举例：在恶意网站中，有一个隐藏的表单，表单内容为转账 api，当用户点击进入这个网页，表单被自动提交，服务器就会执行转账操作
- 引诱用户点击链接

  - 举例：通过引诱用户点击黑客的链接，链接为转账 api，一旦点击链接，服务器就会执行转账操作。

- 怎么防御
  - 通过设置 cookie 的 samesite 属性
    - 从第三方站点发起的请求，禁止 cookie 的发送
    - http 响应头里面，通过 set-cookie 字段设置 cookie 时，可以带上 samesite 选项
    - samesite 有三个值
      - strict：严格模式，浏览器禁止第三方 cookie
      - lax：相对宽松，跨站点情况下，从第三方站点的链接打开或提交 get 方式的表单两种方式会携带 cookie；但是如果在第三方站点中使用 post 方法，或者通过 img、iframe 等标签加载 url，这些场景都不会携带 cookie
      - None：在任何情况都会发送 cookie 数据
  - 验证请求的来源站点
    - http 请求头中的 referer 和 Origin 属性
      - referer：记录该 http 请求的来源地址，包括：**协议+域名+查询参数（不包含锚点信息）**
      - origin：标识出最初请求是哪里发起的，包括：**协议+端口号**
        - 一般只存在 CORS 跨域请求中，response 有对应的 header: `Access-Contorl-Allow-Origin`
      -
  - CSRF token
    - 浏览器向服务器发送请求时，服务器生成一个 csrf token，就是一个字符串，然后将该字符串植入到返回的网页中，存放在 localStorage 中
    - 如果是从第三方发送的请求，则无法获得 csrf token

### XSS 攻击

### SQL 注入
