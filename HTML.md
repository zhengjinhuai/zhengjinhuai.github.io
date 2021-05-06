# HTML

## 1. HTML 文件格式

- meta 标签：

  - 提供页面元信息，比如针对搜索引擎优化和<font color='red'>更新频率</font>的描述 description 和关键字 keywords

  - 位于文档的头部，定义了与文档相关的名称/值对

  - 必须属性：content，可选属性：http-equiv、name

  - http-equiv 将 content 内容绑定到 http 头部，有 expires、set-cookie、refresh、content-type

  - 比如：

    - ```html
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="京东JD.COM-专业的综合网上购物商城,销售家电"
      />
      <meta name="keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3" />
      ```

## 2. HTML5 新特性

### 2.1 新增标签

- 表单类型：input 中 type 属性等于 email、number、url、search、color、tel 和 date

- 视频和音频：video 和 audio
- Canvas 绘图：`<canvas></canvas>`
- SVG 矢量绘图
- 拖放属性：
- 地理定位：getCurrentPosition
- web 存储：
  - localStorage：持久性存储
  - sessionStorage：会话存储
- 离线存储：在文档的 html 标签中包含 manifest 属性，每个指定 manifest 的页面在用户访问的时候都会被缓存

### 2.2 WebSocket

#### 2.2.1 是什么？

## HTML 的解析、渲染过程

### src 和 href 的区别

- href 表示超文本引用，指向网络资源所在位置，比如 a 标签、link 标签引入 css
- src 目的时把文件下载道 HTML 页面中去，比如 img 标签、script 标签
- 浏览器遇到 href 会并行下载资源并且不会停止对当前文档的处理（这也是为什么建议使用 link 方式加载 css，而不是使用@import）
- 浏览器解析到 src，会暂停其他资源的下载和处理，直到该资源加载或执行完毕（这也是 script 标签为什么放在底部而不是头部的原因）

### script 中的 defer 和 async 的区别

- 默认情况下,脚本的下载和执行会按照文档的先后顺序同步进行，当脚本下载和执行的时候，文档解析就会被阻塞，脚本下载和执行完之后文档才能继续进行解析
- 有 defer 属性时，脚本加载和文档加载异步发生；脚本会等到文档解析完<font color='red'>（DOMContentLoaded 事件发生）</font>才开始执行
- 有 async 属性时，脚本加载和文档加载异步发生；脚本下载完会先停止 HTML 解析，执行脚本，脚本解析完继续 HTML 解析
- 有 defer 和 async 时，执行效果和 async 一致

判断题：

1. 通过 link 标签加载的外部 css 文件不会阻塞 DOM 树解析，但会阻塞 DOM 树的渲染（√）

- link 标签还会阻塞其之后的 script 的执行

2. 内联 script 的执行需要等待在此 script 标签之前的外部 CSS 全部加载完成（√）
3. 带有 async 属性的 script 加载，执行不会阻塞 DOM 树的解析和渲染（×）
4. 带有 defer 属性的 script 的执行在 DOMContentLoaded 事件触发之后（√）

总结：

1. script 会阻塞 DOM 解析和渲染
2. link

## meta 标签
