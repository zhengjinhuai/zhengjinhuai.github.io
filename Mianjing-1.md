# 面经

## CSS3 新特性

- 过渡 transition： CSS 属性，花费时间，效果曲线(默认 ease)，延迟时间(默认 0)复制代码
- 动画 animation：动画名称，一个周期花费时间，运动曲线（默认 ease），动画延迟（默认 0），播放次数（默认 1），是否反向播放动画（默认 normal），是否暂停动画（默认 running）复制代码
- 形状转换 transform:适用于 2D 或 3D 转换的元素
  - rotate(30deg);
  - translate(30px,30px);
  - scale(.8);
  - skew(10deg,10deg);
  - rotateX(180deg);
  - rotateY(180deg);
  - rotate3d(10,10,10,90deg);
- 选择器
- 阴影     box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置 inset 就是从外往里）;复制代码
- 边框     border-image: 图片 url 图像边界向内偏移 图像边界的宽度(默认为边框的宽度) 用于指定在边框外部绘制偏移的量（默认 0） 铺满方式--重复（repeat）、拉伸（stretch）或铺满（round）（默认：拉伸（stretch）;
- 背景   background-clip  制定背景绘制（显示）区域  background-origin    background-size
  - （background-clip: border-box;）默认情况（从边框开始绘制）
  - （background-clip: padding-box;）从 padding 开始绘制（显示），不算 border,，相当于把 border 那里的背景给裁剪掉！
  - （background-clip: content-box;）只在内容区绘制（显示），不算 padding 和 border，相当于把 padding 和 border 那里的背景给裁剪掉！
- 反射      -webkit-box-reflect:方向[ above-上 | below-下 | right-右 | left-左 ]，偏移量，遮罩图片
- 文字换行
  - 语法：word-break: normal|break-all|keep-all;、
  - 语法：word-wrap: normal|break-word;
  - 超出省略号    text-overflow:clip|ellipsis|string
- 文字阴影
  - 语法：text-shadow:水平阴影，垂直阴影，模糊的距离，以及阴影的颜色。
- 颜色
  - rgba（rgb 为颜色值，a 为透明度）
    - color: rgba(255,00,00,1);
    - background: rgba(00,00,00,.5);
  - hsla h:色相”，“s：饱和度”，“l：亮度”，“a：透明度”
    - color: hsla( 112, 72%, 33%, 0.68);
    - background-color: hsla( 49, 65%, 60%, 0.68);
- 渐变
- Filter（滤镜）
  - 黑白色 filter: grayscale(100%)
  - 褐色 filter:sepia(1)
  - 饱和度 saturate(2)
  - 色相旋转 hue-rotate(90deg)、
  - 反色 filter:invert(1)
  - 透明度 opacity(.5)
  - 亮度 brightness(.5)
  - 对比度 contrast(2)
  - 模糊 blur(3px)
- 弹性布局   Flex
- 栅格布局 grid
- 多列布局
- 盒模型定义
  - box-sizing:border-box 的时候，边框和 padding 包含在元素的宽高之内！
  - box-sizing:content-box 的时候，边框和 padding 不包含在元素的宽高之内！
- 媒体查询 就在监听屏幕尺寸的变化，在不同尺寸的时候显示不同的样式！在做响应式的网站里面，是必不可少的一环！

## 2. HTML5 新特性

### 2.1 新增标签

- 新增语义化标签：footer、nav、section、header、article
- 表单类型：input 中 type 属性等于 email、number、url、search、color、tel 和 date
- 视频和音频：video 和 audio
- Canvas 绘图：`<canvas></canvas>`
- SVG 矢量绘图
- 拖放属性：`<div id="draggable" class="draggable" draggable="true">`
- 地理定位：getCurrentPosition
- web 存储：
  - localStorage：持久性存储
  - sessionStorage：会话存储
- 离线存储：在文档的 html 标签中包含 manifest 属性，每个指定 manifest 的页面在用户访问的时候都会被缓存

### 2.2 WebSocket

- 一个双向通信协议，全双工，解决了 HTTP 协议中服务器不能主动联系客户端的缺陷。
- 握手阶段采用 HTTP 协议，默认端口 80 和 443
- 建立在 TCP 协议基础之上，WebSocket 协议属于应用层
- 可以发送文本，也可以发送二进制数据
- 没有同源限制，客户端可以与任意服务器通信
- 协议标识符为 ws，如果加密则为 wss

### 2.3 Web Woker

- 这一规范定义了一套 API，它允许一段 JavaScript 程序运行在主线程之外的另外一个线程中。
- 这个子线程是浏览器开的，并没有改变 JS 引擎是单线程的本质。
- Web Worker 规范中定义了两类工作线程：
- 专用线程 Dedicated Worker：只能为一个页面所使用。
- 共享线程 Shared Worker，可以被多个页面所共享。

### Worker 线程数据通信方式

- Worker 与其主页面之间的通信
  - onmessage 事件
  - postMessage() 方法
- Worker 与其主页面之间的数据传递是拷贝，不是共享

### 2.4 废除元素

- 纯表现元素：font/center/u 用 css 代替
- 部分浏览器支持的元素：applet/bgsound/blink
- 对可用性产生负面影响的元素：frameset/frame/noframes，在 html5 中不支持 frame 框架，只支持 iframe 框架

## vue3 新特性

### 更新要点

首先是通过 RFC(Request For Comments)的形式进行的改动，讨论。

- Performance
- Tree-shaking support
- Composition API
- Fragment, Teleport, Suspense
- Better TypeScript support
- Custom Render API

#### Performance

PatchFlag：利用编译器，分析模板，进行优化，性能提升。通过 PatchFlag 标记动态节点，无论嵌套多深，动态节点都直接与 Block 根节点绑定，无需再遍历其他静态节点。（重要的思想就是编译时做小的优化，积少成多）
hoistStatic：将静态的数据/变量提升到 render()函数体之外，渲染的时候只需要进行复用，节约了内存。静态内容解耦
cacheHandlers：事件监听缓存，在父组件重新渲染的时候，子组件也会跟着重新渲染，父组件传给子组件的事件处理程序（函数）也需要重新创建一遍，Vue3.0 通过事件监听缓存，在第一次创建的时候生成一个内联函数，等后面再创建的时候直接使用缓存中的事件处理程序（函数）。
SSR（server side rendering，服务端渲染）：
什么是 SSR：服务端收到客户端的初始请求后，把数据填充到模板形成完整的页面，由服务端把渲染的完整的页面返回给客户端。这样减少了一次客户端到服务端的 HTTP 请求，加快了相应速度，一般用于首屏的性能优化。
在进行 SSR 的时候，对于静态的内容，合并成一个单独的字符串，直接全部推送进一个 buffer 中，即使存在动态的内容，也是内嵌在静态的内容中的。

#### Tree-shaking

什么是 Tree-shaking：

- 可以将无用模块“剪枝”，仅打包需要的。即“按需引入”。
- ES6 的模块引入是静态分析的，故而可以在编译时正确判断到底加载了什么代码。
- 分析程序流，判断哪些变量未被使用、引用，进而删除此代码。
- 但是，函数的副作用：除了返回函数的返回值之外，函数还做了其他的事情：修改全局变量、打印输出、获取用户输入、DOM 查询、数据库操作等。
- Vue 3.0 的优化：基于函数的 API 每一个函数都可以作为 named ES export 被单独引入，这使得它们对 tree-shaking 非常友好。没有被使用的 API 的相关代码可以在最终打包时被移除，实现 DCE（Dead Code Elimination）

#### Composition API

- 现有 API 不受影响

- 所有的 data、methods、computed 等都聚在一起，当一个组件中代码量很多的时候且不便于切分的时候，逻辑关注点中相关的代码是分散的，Composition API 则是，将每一个逻辑关注点的代码放在一起（所有功能相关的代码放在一起，便于维护），不用在整个文件中跳来跳去。同时，便于复用，组合，更好的灵活性。

- 基于 proxy 的响应侦测

  - Proxy 的优势如下:
    - Proxy 可以直接监听对象而非属性；
    - Proxy 可以直接监听数组的变化；
    - Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
    - Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
    - Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
  - Object.defineProperty 的优势如下:
    - 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。

- （以前）基于 getter / setter 的响应侦测

#### Fragment & Teleport & Suspense

- Fragment：模板可以是纯文字、多个节点、v-for，会自动变成碎片，一个组件支持多个根元素，不用再都包含在一个节点中了。
- Teleport：没懂
- Suspense：实现了一定程度的轻量化的异步调度，在一个组件树渲染到屏幕之前，先在内存中渲染，记录存在异步依赖的组件，当所有嵌套的异步依赖都 resolve 之后，才会被渲染到屏幕中。async setup()

#### Better TypeScript Support

- 更好地支持了 TS，自动补全 api、参数的提示、静态的检查等，良好的编程体验。

#### Custom Renderer API

没懂

#### Vite（法语：快）

- 一个 HTTP 服务器/更轻量、更快的面向浏览器的开发工具，没有编译、没有打包、支持热更新（非常快），启动服务器可以直接开始写 vue 文件，请求了什么才打包、编译什么。
  在浏览器端使用 export import 的方式导入和导出模块，在 script 标签里设置 type="module" ，然后使用 ES module。相当于拦截了一下 App.vue 的请求，让浏览器帮忙处理 import 的任务，服务器只负责提供请求中所请求的文件。
- 1、快速的冷启动，不需要等待打包操作； 2、即时的热模块更新，替换性能和模块数量的解耦让更新飞起； 3、真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。

## ES6 新特性

- let、const
- 箭头函数
- 模板字符串
- 新的数据类型
- set 和 map
- class
- 拓展运算符
- 解构赋值
- for of
- Promise

## 闭包

- 更多是维持 function 内部变量的作用域

## 原型链

## em 和 rem

- em：em 是相对于父元素的 font-size
- rem：1rem = 浏览器的根元素（HTML 元素）的 font-size。

## vuex

- vuex 是状态管理模式，采用集中式存储管理应用所有组件的状态，并以相应的规则暴增状态以一种可预测的方式发生变化。
- 将全局组件的共享状态抽取出来为一个 store，应用中任何一个组件都可以使用，vuex 更改 state 的唯一途径就是通过 mutation
- mutation 需要 commit 触发，action 实际触发的也是 mutation
- mutation 处理同步任务，action 处理异步任务

### vuex 的每个属性

- state：是存储的单一状态，是存储的基本数据
- getters：从基本数据 state 派生的数据，相当于 store 的计算属性
- mutations：提交更新数据的方法，必须是同步的。每个 mutation 都有一个字符串的事件类型（type）和一个回调函数（handler）。
- actions：像是一个装饰器，提交的是 mutation，而不是直接变更状态，可以包含任何异步操作
- modules：是 store 分割的模块，每个模块拥有自己的 state、getters、mutations、actions
- 辅助函数：mapState、MapGetters、MapActions、MapMutations 等辅助函数给开发在 vm 中处理 store

## 双向数据绑定

### vue2

- 监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
- 解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
- 订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
- 订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

### vue3

vue3.0 实现数据双向绑定是通过 Proxy

- Proxy 是 ES6 中新增的一个特性，翻译过来意思是"代理"，用在这里表示由它来“代理”某些操作。 Proxy 让我们能够以简洁易懂的方式控制外部对对象的访问。其功能非常类似于设计模式中的代理模式。
- Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
- 使用 Proxy 的核心优点是可以交由它来处理一些非核心逻辑（如：读取或设置对象的某些属性前记录日志；设置对象的某些属性值前，需要验证；某些属性的访问控制等）。 从而可以让对象只需关注于核心逻辑，达到关注点分离，降低对象复杂度等目的。
- 扩展：
  - 使用 proxy 实现，双向数据绑定，相比 2.0 的 Object.defineProperty ()优势：
    - 可以劫持整个对象，并返回一个新对象
    - 有 13 种劫持操作

## vue 生命周期

- 创建 vue 实例、初始化事件和生命周期函数、beforeCreate（这时候 data 和 method 中的数据还没初始化）、通过依赖注入导入依赖项、created（data 和 methods 都已经被初始化好了）、检查 vue 配置，即 new Vue{}里面的 el 项是否存在，如果有就继续检查 template 项，没有则手动绑定调用 vm.$mount()、检查配置中的 template 项，如果没有 template 进行填充被绑定区域，则被绑定区域的 el 对象的 outerHTML 都作为填充对象替换掉填充区域；如果有 template，将模板变成函数、beforeMount（执行时，模板已经在内存中
- 编译好了，但是未挂载道页面中去，页面还是旧的）、将内存中编译好的模板，真实地替换到浏览器页面中、mounted（只有执行完 mounted，表示整个 vue 实例初始化完成，进入运行阶段）、组件运行阶段的生命周期函数只有两个：beforeUpdate 和 updated、beforeUpdate 执行前，data 是最新的，但是页面数据是旧的，之后进行页面渲染，先根据 data 最新的数据，在内存中渲染出一份最新的内存 dom 树，当最新的内存 dom 树被更新后，会把最新的内存 dom 树重新渲染道真实的页面中去，这时候就完成了数据从 data(Model 层)到 view（视图层）的更新，beforeDestroy（当执行 beforeDestroy 钩子函数时，vue 准备进入销毁阶段，data 和 methods 以及过滤器、指令还可以使用，未真正执行销毁过程）、当执行 destroyed 函数的时候，组件已经被完全销毁，此时，组件中所有的数据、方法、指令、过滤器都已经不可用了，生命周期结束。

## vue 组件通信

- v-model：本质上是子父组件通信的语法糖，根据控件类型自动选取正确的方法来更新元素，负责监听用户的输入事件以更新数据。
- props / $emit
- ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- $emit / $on ：这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。
比如：
this.$bus.$on(eventName, e => {});
this.$bus.$emit(eventName, args)
- $attrs/$listeners
- provide / inject
- Vuex： store 容器，改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化

## 对 vue 项目优化

1).v-if 和 v-show 区分使用场景

2). computed 和 watch 区分使用场景

3). v-for 遍历必须为 item 添加 key，且避免同时使用 v-if

4). 数据量较大的列表，做分页

5). 事件的销毁

6). 图片资源懒加载

7). 路由懒加载

8). 第三方插件的按需引入

9). 服务端渲染 SSR or 预渲染

## 从 URL 输入到页面渲染有哪些步骤

### 2.1 查找缓存

1. 浏览器进程通过进程通信，把 URL 请求发送给网络进程
2. 网络进程首先就会寻找缓存，寻找的顺序为：浏览器缓存、系统缓存、路由器缓存
3. 这里的浏览器缓存主要有两种：

- 强缓存：
  - expires：本地过期时间
  - cahce-control：优先级高，相对时间
- 协商缓存：
  - Last-Modified/If-Modified-Since：本地修改了也会改
  - Etag/If-None-Match：发送给服务器判断是否修改了

### 2.2 发送网络请求

1. 根据主机名查找 ip，操作系统首先会在自己本地的 hosts 文件里检查是否含有这个网址的映射。如果没有则进行 DNS 域名解析得到 IP。
2. 如果为 https 请求，添加 443 端口信息，如果为 http 请求，添加 80 端口信息
3. 三次握手
4. 代理服务器，如果有的话从代理服务器返回，没有就需要访问源服务器，并且代理服务器自己会拷贝一份保存
5. 四次挥手
6. 浏览器接受到服务器返回的状态码，如果为 301 或 302，需要重定向到其他的 URL，重新发起网络请求

### 2.3 浏览器处理 HTML

客户端收到服务端返回数据

1. 根据 html 文件构建 dom 树
2. 根据 css 文件进行样式计算
3. 布局阶段

- 根据 DOM 树和 CSS 对象模型构建 render tree
- 将 render tree 中的节点添加到布局树中
- 布局计算，将单位标准化，然后计算各个节点的坐标位置

4. 渲染阶段

- 进行页面的分层
- 根据绘制列表，进行图层绘制
- 栅格化操作：合成线程会将图层划分为图块，将图块转换为位图。通常使用 gpu 来加速生成
- 浏览器进程绘制图块，将页面内容绘制到内存中，然后显示在屏幕上

## 如果要新建一个全局命令，需要怎么声明

- 第一步：最好建立一个全局的命令文件例如：directive/directive.js
- 第二步：利用 Vue.directive()建立一个全局命令，并将它暴露出来，例如一个 focus 让表单自动聚焦
- 第三步：在 main.js（入口 JS 文件）中将它引入，可以省略文件后缀
  这样任何一个 Vue 文件只要这样 v-focus(命令名)，就可以很方便的用到了

## 如何重置一个 data

如果想重置某组件的 data,我们可以

- 通过 this.$data获取当前的data，通过this.$options.data 可以获取组件初始状态的 data。
- 然后使用 Object.assign(this.$data, this.$options.data())就可以将当前状态的 data 重置为初始状态。

如果只想重置某个属性：this.form = this.$options.data().form

## 6. vue 中 computed 和 watch 区别

> 参考链接[Vue 中 computed 和 watch 的区别](https://www.cnblogs.com/jiajialove/p/11327945.html)

计算属性 computed：

1. 支持缓存，只要依赖数据发生变化，才会重新进行计算
2. 不支持异步，当 computed 内有异步操作时无效，无法监听数据变化
3. computed 属性值默认会走缓存，计算属性是基于他们的响应式依赖进行缓存的，也就是基于 data 中声明过或父组件传递的 props 中的数据通过计算得到的值
4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他值，是一个多对一或者一对一，一般用 computed
5. computed 属性值是函数，默认走 get 方法；函数返回值就是属性的属性值；在 computed 中，属性都有一个 get 和 set 方法，当数据发生变化时调用 set 方法

监听属性 watch：

1. 不支持缓存，数据变，直接触发相应的操作
2. 支持异步
3. 监听的函数接受两个参数，一是最新的值，二是输入之前的值
4. 当一个属性发生变化时，需要执行对应的操作，一对多；
5. 监听数据必须是 data 中声明过或者父组件传递过来的 props 中的数据，当数据变化时，函数有两个参数

- immediate：组件加载时立即触发回调函数执行
- deep：深度监听，为了发现对象内部值得变化，复杂类型数据时使用，例如数组中得对象内容发生改变，监听数组的变动不需要这么做。注意：deep 无法监听到数组得变动和对象的新增，只有以响应式得方法触发才会被监听到

## mutation 和 action 有什么区别？

- mutation 中更改 vuex 的 store 中状态的唯一方法是提交 mutation。每个 mutation 都有一个字符串的事件类型 type 和一个回调函数 handler。这个回调函数就是我们实际进行状态更改的地方，并且会接受 state 作为第一个参数
- mutation 中的 hander 不能直接调用，需要配合 store.commit 方法使用
- action 提交的是 mutation，而不是直接变更状态
- action 可以包含任意的异步操作。
