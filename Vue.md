# Vue

## 1. 生命周期

- beforeCreated
- Created
- beforeMounted
- Mounted
- beforeUpdated
- Updated
- beforeDestory
- Destoryed

## 2. 双向数据绑定原理

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

## 3. MVVM 响应式原理

## 4. 组件通信方式

> 参考链接：[整理 4 种 Vue 组件通信方式](https://segmentfault.com/a/1190000013168979)

### 父子组件的通信

1. 父向子：子组件使用 props 接受数据，就可以直接使用数据

- 子组件接收到数据不能修改，修改需要用计算属性，或者把数据赋值给子组件 data 里的一个变量

2. 子向父：在 methods 中写函数，监听子组件事件触发

- 子组件用$emit('methods中的方法') 
总结：第一种方法：用props/$emit

### 非父子组件的 eventBus 通信

原理：事件的触发和监听

- 给 app 组件添加 bus 属性（这样所有组件可以通过 this.$root.Bus 访问到她）
- 组件一：this.$root.Bus.$emit 触发事件
- 组件二：this.$root.Bus.$on 监听事件

### 利用本地缓存实现组件通信

### vuex 通信

## 5. 介绍一下 vuex

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

## 6. vue 中 computed 和 watch 区别

> 参考链接[Vue 中 computed 和 watch 的区别](https://www.cnblogs.com/jiajialove/p/11327945.html)
> 计算属性 computed：

1. 支持缓存，只要依赖数据发生变化，才会重新进行计算
2. 不支持异步，当 computed 内有异步操作时无效，无法监听数据变化
3. computed 属性值默认会走缓存，计算属性市基于他们的响应式依赖进行缓存的，也就是基于 data 中声明过或父组件传递的 props 中的数据通过计算得到的值
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
