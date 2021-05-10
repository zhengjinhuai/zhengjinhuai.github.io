# Computer Nework

## 1. 跨域

### 1.1 什么是跨域？

### 1.2 跨域的解决方法？

- JSONP
- WebSocket
-

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

### HTTP3.0

## 跨域资源共享 CORS

1. 允许浏览器向跨源服务器发送 XMLHttpRequest 请求，从而克服 AJAX 只能同源使用的限制

## 前端安全

### CSRF 攻击

### XSS 攻击

### SQL 注入
